"use client"

import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import { fetchPosts } from "../services/api"

function Feed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const data = await fetchPosts()
        // Sort posts by newest first
        const sortedPosts = [...data].sort((a, b) => b.id - a.id)
        setPosts(sortedPosts)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()

    // Set up polling for real-time updates
    const intervalId = setInterval(loadPosts, 30000) // Poll every 30 seconds

    return () => clearInterval(intervalId)
  }, [])

  if (loading && posts.length === 0) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div>
      <h1 className="page-title">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
