import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import AudioPlayer from "./components/AudioPlayer"
import Favorites from "./components/Favorites"
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <AudioPlayer />
      <Favorites className="aside" />
      <Main className="main"/>
    </div>
  )
}
