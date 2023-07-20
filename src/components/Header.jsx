import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img className="header--logo" src="./header-logo.png" />
            <h1 className="header--title">PODVERSE</h1>
            <input placeholder="Search for podcasts..." className="search--bar" />
        </header>
    )
}