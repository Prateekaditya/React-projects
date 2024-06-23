import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src="./images/brand_logo.png" alt="logo" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <button className="nav_login">LOGIN</button>
        </div>
    )
}
export default Navbar;