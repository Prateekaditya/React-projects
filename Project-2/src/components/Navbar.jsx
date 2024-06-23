import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <img src="./images/logo.png" alt="logo"  />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;