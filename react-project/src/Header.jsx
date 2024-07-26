import React, { useState } from "react";
import EmojiButton from "./EmojiButton.jsx";
import Login from "./Login";
import Logout from "./Logout.jsx";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleClick() {
        setIsLoggedIn(!isLoggedIn);
    }
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
        console.log("you clicked me")
    }

    return (
        <header>
            <h1>Welcome to Techland</h1>

            <a onClick={handleLinkClick} href="/about">About</a>
            <a onClick={handleLinkClick} href="/Laptops">Laptops</a>

            <a onClick={handleLinkClick} href="/Phones">Phones</a>
            <nav onClick={handleClick}>{isLoggedIn ? <Logout /> : <Login />}</nav>
        </header>
    );
}
export default Header;
