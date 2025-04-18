"use client"

import { useState } from "react"
import Header from "./components/Header"
import TopUsers from "./pages/TopUsers"
import TrendingPosts from "./pages/TrendingPosts"
import Feed from "./pages/Feed"

function App() {
  const [currentPage, setCurrentPage] = useState("feed")

  const renderPage = () => {
    switch (currentPage) {
      case "top-users":
        return <TopUsers />
      case "trending":
        return <TrendingPosts />
      case "feed":
      default:
        return <Feed />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container">{renderPage()}</main>
    </div>
  )
}

export default App
