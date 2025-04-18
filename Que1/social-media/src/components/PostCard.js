function PostCard({ post }) {
    return (
      <div className="card post-card">
        <div className="post-header">
          <img
            src={`https://picsum.photos/seed/${post.userId}/40/40`}
            alt={`${post.username}'s avatar`}
            className="post-avatar"
          />
          <span className="post-user">{post.username}</span>
        </div>
        <div className="post-content">{post.body}</div>
        <img src={`https://picsum.photos/seed/${post.id}/600/300`} alt="Post image" className="post-image" />
        <div className="post-stats">
          <span>{post.commentCount} comments</span>
        </div>
      </div>
    )
  }
  
  export default PostCard
  