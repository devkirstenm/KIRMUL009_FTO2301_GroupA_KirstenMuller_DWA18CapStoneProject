import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import AudioPlayer from "./components/AudioPlayer"
// import Sidebar from "./components/Sidebar"
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <AudioPlayer />
      <Main className="main"/>
      {/* <Sidebar className="aside" /> */}
    </div>
  )
}
