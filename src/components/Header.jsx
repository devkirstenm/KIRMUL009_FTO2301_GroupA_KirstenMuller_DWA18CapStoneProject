import React from "react"

export default function Header() {

    // search bar state to hold the data that's typed in
    const [searchQuery, setSearchQuery] = React.useState("") // empty string as default

    function handleChange(event) { // (*1*) event object (it's part of event listeners such as handleClick) gets passed 
        console.log(event.target.value) // (*1*) displays the specific key you pressed, everytime you press a key
        setSearchQuery(event.target.value)
    }

    {/* (*2*) */} 
    function handleSubmit(event) {
        event.preventDefault()
        // NOTE: 'submitToApi' is not a function made yet
        submitToApi(formData) // passing our formData to our function 'submitToApi' ) 
        console.log(formData) // to check if it's working
    }


    return (
        <header className="header">
            <img className="header--logo" src="./header-logo.png" />
            <h1 className="header--title">PODVERSE</h1>
            {/* search bar */}
            <form onSubmit={handleSubmit}> {/* (*2*) */} 
                <input 
                    type="text"
                    placeholder="Search for podcasts..." 
                    className="search--bar" 
                    /* listen for any changes (e.g., a single key press) that happen to input */
                    onChange={handleChange}
                    // if setSearchQuery matches any podcast title, display those podcasts
                    // setSearchQuery === {podcast.title} ? ......
                />
                <button>🔍︎</button> {/* (*2*) because this button is found instead a form element, when pressed, it will automatically trigger the forms "onSubmit" event handler */} 
            </form>
        </header>
    )
}