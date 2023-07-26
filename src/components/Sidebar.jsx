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
    function ShowSignUpForm() {
        const [showSignUpForm, setShowSignUpForm] = React.useState(false);
          
        // (*3*) (sign up form)
        const [signUp, setSignUp] = React.useState({
            email: "",
            password: "",
        })

        // (*3*) (sign up form)
        function handleChange(event) {
            // from the event, i am pulling out the properties: name, value, type
            const {name, value, type, checked} = event.target // we get these properties from event.target
            // access previous form data & return an object
            setFormData(prevFormData => ({
                // object should have all of the properties of the previous form data...
                ...prevFormData,
                // .... and we'll update the property based on the 'name' value. 
                [name]: value // updates the value property (to whatever the user types)
            })) 
        }
        console.log(formData) // (must confirm) displays: {email: "cat@gmail.com", password: "asdf"}
        
        // (*3*) (sign up form) - what happens when the form submits:
        function handleSubmit(event) {
            event.preventDefault()
            console.log("Successfully signed up")
            // (action required!) put logic here to handle what happens when user presses sign up
        }

        function handleLoginIconClick() {
            setShowSignUpForm(!showSignUpForm); // toggles the value when login icon is clicked
          }
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
                    <img src="./login-icon.png" className="login--icon" onClick={handleLoginIconClick}/>
                </div>
                </nav>
                {/* (*3*) (sign up form) - only display when login-icon is pressed */}
                {/* Conditional rendering based on showSignUpForm */}
                {showSignUpForm && (
                    <form onSubmit={handleSubmit} >
                        <input 
                            type="email" 
                            placeholder="Email address"
                            className="form--input"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            className="form--input"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                        <button>Sign up</button> {/* because the button is inside the <form>, it acts as a submit button automatically. So clicking "sign up" will trigger the submit event on the form, and therefore will run the 'handleSubmit' function*/}
                    </form>
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
}
