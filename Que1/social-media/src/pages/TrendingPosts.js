"use client"

import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import { fetchPosts } from "../services/api"

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTrendingPosts = async () => {
      try {
        setLoading(true)
        const posts = await fetchPosts()

        // Find the maximum comment count
        const maxComments = Math.max(...posts.map((post) => post.commentCount))

        // Filter posts with the maximum comment count
        const trending = posts.filter((post) => post.commentCount === maxComments)

        setTrendingPosts(trending)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadTrendingPosts()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div>
      <h1 className="page-title">Trending Posts</h1>
      {trendingPosts.length > 0 ? (
        trendingPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No trending posts found.</p>
      )}
    </div>
  )
}

export default TrendingPosts
