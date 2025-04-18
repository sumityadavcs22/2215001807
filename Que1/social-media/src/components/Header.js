"use client"

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Social Media Analytics</div>
        <nav className="nav">
          <a
            href="#"
            className={`nav-link ${currentPage === "feed" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage("feed")
            }}
          >
            Feed
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "trending" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage("trending")
            }}
          >
            Trending Posts
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "top-users" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage("top-users")
            }}
          >
            Top Users
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
