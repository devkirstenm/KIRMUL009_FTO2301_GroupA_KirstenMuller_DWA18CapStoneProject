    // 3: FAVOURITES: this is a state to update the amount of favorited music the user has
    // const [favoriteAmount, setFavoriteAmount] = React.useState(o) // initially the favorites is set to 0 because the user hasn't favorited any music yet
    
import React from "react"

export default function Sidebar() {

    // state for "amount of favorites"
    // const [favoritesCount, setFavoritesCount] = React.useState(o) // default amount of favorites is 0
    
    

    /** code to do:
     * when user pressed 'heart' (favorite) button on one of the podcasts episodes,
     * that should send a signal to update the 'setAmountOfFavorites' to push +1 number
     * 
     * 
     */
    function updateFavoriteCount() {
        // if users presseds click on heart ... code: ? , then
        setFavoritesCount(prevFavoritesCount => prevFavoritesCount + 1)
        // else if // user unclicks heart  
        
        setFavoritesCount(function() { // alternative is to provide a 'callback function' which will return the new value we want state to be
            return favoritesCount + 1
            // BREAKING THIS DOWN FURTHER:
                // setCount(function(prevCount) { //if we provide this function ^, React will pass 'prevCount' as its parameter...
                //     return prevCount + 1 // ... which we can use
                    // ARROW FUNCTIONS CAN SIMPLIFY THIS EVEN FURTHER
                        // function add() {
                        //     setCount(prevCount => prevCount + 1)
            })
    
    

    return (
        <main className="sidebar">
            <nav className="nav--bar">
                <h1 className="favorites--text">Favorites</h1>
                <div className="nav--items">
                    <img src="./gear-icon.png" className="settings--icon"/>
                    <img src="./login-icon.png" className="login--icon" />
                </div>
                {/* <h2>Amount of favorites: {favoritesCount}</h2>  */}
            </nav>
            <h2 className="favorites--amount--text">Favorites: 0</h2>
            <div>
                <h1>This is a container for where the audio player goes</h1>
            </div>
        </main>
    )
}
}