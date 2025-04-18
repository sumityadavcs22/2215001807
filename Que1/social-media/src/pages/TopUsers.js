"use client"

import { useState, useEffect } from "react"
import UserCard from "../components/UserCard"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import { fetchPosts } from "../services/api"

function TopUsers() {
  const [topUsers, setTopUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTopUsers = async () => {
      try {
        setLoading(true)
        const posts = await fetchPosts()

        // Create a map to count comments per user
        const userCommentMap = {}

        posts.forEach((post) => {
          if (!userCommentMap[post.userId]) {
            userCommentMap[post.userId] = {
              id: post.userId,
              username: post.username,
              commentCount: 0,
            }
          }
          userCommentMap[post.userId].commentCount += post.commentCount
        })

        // Convert map to array and sort by comment count
        const usersArray = Object.values(userCommentMap)
        const sortedUsers = usersArray.sort((a, b) => b.commentCount - a.commentCount)

        // Get top 5 users
        const top5Users = sortedUsers.slice(0, 5)

        setTopUsers(top5Users)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadTopUsers()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div>
      <h1 className="page-title">Top Users with Most Commented Posts</h1>
      {topUsers.length > 0 ? topUsers.map((user) => <UserCard key={user.id} user={user} />) : <p>No users found.</p>}
    </div>
  )
}

export default TopUsers
