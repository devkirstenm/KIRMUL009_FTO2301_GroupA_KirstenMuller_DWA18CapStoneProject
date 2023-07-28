import React from "react"

export default function DraftFavorites() {
    /* favorites section*/

    // favorites count state: updates the "favorites:" amount that keeps track of the number of favorites the user has
    const [favoritesCount, setFavoritesCount] = React.useState(0) // default is 0 favorites
    
    function increaseFavoritesCount() {
        setFavoritesCount(prevFavoritesCount => prevFavoritesCount + 1)
        }

    function decreaseFavoritesCount() {
        setFavoritesCount(prevFavoritesCount => prevFavoritesCount - 1)
    } // add "decreaseFavorites" to jsx

    // add to favorites array state: adds a new favorite podcast episode to the list of Favorites 
    const [favoritesArray, setFavoritesArray] = React.useState([])

    function addFavorite(podcast) { // NOTE: you have to add "podcast" otherwise it won't know what podcast.id/image etc. is in the return statement
        setFavoritesArray(prevFavoritesArray => {
            return [
                ...prevFavoritesArray, 
                <div key={podcast.id}>
                    <img src={podcast.image} />  
                    <h2>{podcast.title}</h2>
                    <p>Season: {podcast.seasons.season}</p>
                    <p>Episode: {podcast.seasons.episodes.episode}</p>
                </div>                    
                ]
        })
    }

    /* sign up section */

    function ShowSignUpForm() {
        const [showSignUpForm, setShowSignUpForm] = React.useState(false);
          
        // state for sign up form
        const [signUp, setSignUp] = React.useState({
            email: "",
            password: "",
        })

        // function handleLoginIconClick() {
        //     console.log("Clicked log in icon");
        // }

        function handleChange(event) {
            // from the event, i am pulling out the properties: name, value
            const {name, value} = event.target // we get these properties from event.target
            // access previous form data & return an object
            setFormData(prevFormData => ({
                // object should have all of the properties of the previous form data...
                ...prevFormData,
                // .... and we'll update the property based on the 'name' value. 
                [name]: value // updates the value property (to whatever the user types)
            })) 
        }
        console.log(formData) // console should display: {email: "example@gmail.com", password: "example"}
        
        // handles 'sign up' form submission 
        function handleSubmit(event) {
            event.preventDefault()
            console.log("Successfully signed up")
            // missing logic: what happens when user presses sign up
        }
    }
    
    return (
        <aside className="sidebar">
            <nav className="nav--bar">
                {/* FAVORITES SECTION*/}
                <h1 className="favorites--text">Favorites</h1>
                <div className="nav--items">
                    <img src="./gear-icon.png" className="settings--icon"/>
                    <img src="./login-icon.png" className="login--icon" /* onClick={handleLoginIconClick} */ />
                </div>
                </nav>
                {/* sign up form - only display when login-icon is pressed */}
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
                )}
            {/* <h2>Amount of favorites: {favoritesCount}</h2>  */}
            <h2 className="favorites--amount--text">Favorites: 0</h2>
            {/* this is where the logic for the favorites will go. Don't know if this is correct below.*/}
            <div key={podcast.id}> 
                <img src={podcast.image} />  
                <h2>{podcast.title}</h2>
                <p>Season: {podcast.seasons}</p> 
                {/* (*5*) UNFAVORITE PODCAST (user presses "x" icon)*/}
                <button onClick={props.handleClick}> {/* don't forget to pass props "export default function Sidebar(props) "*/}
                    X
                </button>
            </div> 
        </aside>
    )
}
