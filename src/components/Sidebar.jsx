import React from "react"
// this file is for the righthand side bar that includes the audio currently playing as well as the users favorited music
/** EXAMPLE
 * top of sidebar: favorited music
 * bottom of sidebar: audio player
 */

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
    }
    

    return (
        <main>
            <div>
                <h1>This is a container for where the users favorited podcast episodes go</h1>
                {/* <h2>Amount of favorites: {favoritesCount}</h2>  */}
            </div>
            <div>
                <h1>This is a container for where the audio player goes</h1>
            </div>
        </main>
    )
}