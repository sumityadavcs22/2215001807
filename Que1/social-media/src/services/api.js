// Base URL for the API
const API_URL = "http://localhost:3000"

// Function to fetch posts from the API
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    // Process the data to ensure it has all required fields
    // This is a good place to transform the data if needed
    return data.map((post) => ({
      ...post,
      commentCount: post.comments ? post.comments.length : 0,
      username: post.user ? post.user.username : `User ${post.userId}`,
    }))
  } catch (error) {
    console.error("Error fetching posts:", error)
    throw error
  }
}

// Function to fetch a single post by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const post = await response.json()

    return {
      ...post,
      commentCount: post.comments ? post.comments.length : 0,
      username: post.user ? post.user.username : `User ${post.userId}`,
    }
  } catch (error) {
    console.error(`Error fetching post ${postId}:`, error)
    throw error
  }
}
