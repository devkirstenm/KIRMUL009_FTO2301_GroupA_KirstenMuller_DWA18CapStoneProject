import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import PodcastCard from "./components/PodcastCard"
import './App.css'

export default function App() {
  return (
    <div className="right-sidebar-flexbox">
      <Header className="header" />
      <Main className="main-content"/>
      <Sidebar className="right-sidebar" />
      {/* <PodcastCard.jsx /> Only display if user clicks on a specific podcast -> conditional rendering -> something  like: only render if *this* exists using && -> my attempt: onClick={<PodcastCard.jsx />} && {<PodcastCard.jsx />}*/}
    </div>
  )
}

/**
 * PROJECT ANALYSIS:
 * 
 * As soon as the app loads it's going to make a call to
 * an api containing the different shows & minimal information (image, title, shortened description, amount of seasons etc.).
 * 
 * Clicking on a specific show (button) will open up a preview of the show that contains more detailed information about the show, it's seasons, and episodes.
 * To close this preview, you can click on a "return button" to return back to the display page of all the shows
 * 
 * To play a specific episode you will have to press a button, 
 * which will play the episode in the media player (sidebar).
 * The episode may be paused. 
 * (more functionality can be added such as remembering)
 * 
 * To favorite an episode, you will press the heart icon on the 
 * display page of the shows or by clicking on a specific episode
 * on a specific show preview. 
 * Either way the show will be added to the 'favorites' area in the sidebar,
 * where it will display the show image, title, and 'season + episode' (if applicable)
 * You may also un-heart (unfavorite) the show/episode, which will remove it from here.
 * 
 * Sign up/ sign in? 
 * 
 * Settings: Dark/light mode?
 */
