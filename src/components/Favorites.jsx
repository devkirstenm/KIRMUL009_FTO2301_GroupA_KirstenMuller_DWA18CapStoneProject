import React from "react"

export default function Favorites() {
    
    return (
        <aside className="favorites--section">
            <nav className="nav--bar">
                {/* FAVORITES SECTION*/}
                <div className="nav--items">
                    <img src="./login-icon.png" className="login--icon" />
                    <img src="./gear-icon.png" className="settings--icon"/>
                </div>
                <h1 className="favorites--text">Favorites</h1>
            </nav>

            {/* sign up form - only display when login-icon is pressed */}
            <h2 className="favorites--amount--text">Favorites: 0</h2>
                <button> 
                    X
                </button>
        </aside>
    )
}
