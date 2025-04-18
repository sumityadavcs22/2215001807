function UserCard({ user }) {
    return (
      <div className="card user-card">
        <img
          src={`https://picsum.photos/seed/${user.id}/50/50`}
          alt={`${user.username}'s avatar`}
          className="user-avatar"
        />
        <div className="user-info">
          <div className="user-name">{user.username}</div>
          <div className="user-stats">{user.commentCount} comments on posts</div>
        </div>
      </div>
    )
  }
  
  export default UserCard
  