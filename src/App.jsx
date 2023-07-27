import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import DraftSidebar from "./components/DraftSidebar"
// import Sidebar from "./components/Sidebar"
// import PodcastCard from "./components/PodcastCard"
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <DraftSidebar className="aside"/>
      <Main className="main"/>
      {/* <Sidebar className="aside" /> */}
    </div>
  )
}
