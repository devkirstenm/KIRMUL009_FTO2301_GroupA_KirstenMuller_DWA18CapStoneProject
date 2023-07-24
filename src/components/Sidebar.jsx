    // 3: FAVOURITES: this is a state to update the amount of favorited music the user has
    // const [favoriteAmount, setFavoriteAmount] = React.useState(o) // initially the favorites is set to 0 because the user hasn't favorited any music yet
    
import React from "react"

export default function Sidebar() {



    /** ----------------------------------------------------------------------
     * FAVORITES SECTION:
     * ----------------------------------------------------------------------
     */

    /** this is to update the "favorites:" amount that keeps track of the number of favorites the user has
     * 'Favorites: 0'
     */
    const [favoritesCount, setFavoritesCount] = React.useState(0) // default is 0 favorites
    
    function increaseFavorites() {
        // setFavoritesCount(favoritesCount + 1) // there's a better way to do this below
        // setFavoritesCount(function(oldValue) { return oldValue + 1 // however you can just use an arrow function to simplify this:
        setFavoritesCount(prevFavoritesCount => prevFavoritesCount + 1)
        }
            /** now add this ^ functionality to the jsx
                * example:
                *         <div className="counter">
                                <div className="counter--count">
                                    <h1>{count}</h1>
                                </div>
                                <button className="counter--plus" onClick={add}>+</button>
                            </div>
                */
    }

    function decreaseFavorites() {
        setFavoritesCount(prevFavoritesCount => prevFavoritesCount - 1)
    } // add "decreaseFavorites" to jsx

    /**this is to add a new favorited podcast episode to the list of Favorites (lesson 20 meme gen)*/
    const [favoritesArray, setFavoritesArray] = React.useState([])

    function addFavorite(podcast) { // you have to add "podcast" otherwise it won't know what podcast.id/image etc. is below
        setFavoritesArray(prevFavoritesArray => {
            return [
                ...prevFavoritesArray, 
                <div key={podcast.id}>
                    <img src={podcast.image} />  
                    <h2>{podcast.title}</h2>
                    <p>Season: {podcast.seasons}</p>
                </div>                    
                ]
        })
    }

    /**
     * ----------------------------------------------------------------------
     * MEDIA PLAYER SECTION:
     * ----------------------------------------------------------------------
     */

    return (
        <aside className="sidebar">
            <nav className="nav--bar">
                {/* FAVORITES SECTION*/}
                <h1 className="favorites--text">Favorites</h1>
                <div className="nav--items">
                    <img src="./gear-icon.png" className="settings--icon"/>
                    <img src="./login-icon.png" className="login--icon" />
                </div>
            </nav>
            {/* <h2>Amount of favorites: {favoritesCount}</h2>  */}
            <h2 className="favorites--amount--text">Favorites: 0</h2>
            {/* this is where the logic for the favorites will go. Don't know if this is correct below. It will contain a scroll to scroll all your favorites.*/}
            <div key={podcast.id}> 
                <img src={podcast.image} />  
                <h2>{podcast.title}</h2>
                <p>Season: {podcast.seasons}</p> 
                {/* (*5*) UNFAVORITE PODCAST (user presses "x" icon)*/}
                <button onClick={props.handleClick}> {/* don't forget to pass props "export default function Sidebar(props) "*/}
                    X
                </button>
            </div> 
            {/* MEDIA PLAYER SECTION*/}
            <div>
                <h1>This is a container for where the audio player goes</h1>
            </div>
        </aside>
    )
