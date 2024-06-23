import React from "react";
import Button from "./Button";
import { TbMessage } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
const Hero =( )=>{
    return(
        <div className="hero">     
           <div className="mainbody">
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>

        <div className="heromain">
            <div>
         <div className="forbuttons">
            <Button icons={<TbMessage fontSize="20px"/>} name="VIA SUPPORT CHAT"/>
            <Button icons={<IoIosCall fontSize="20px"/>} name="VIA CALL"/>
         </div>
         <Button isreally="true" icons={<TbMessage fontSize="20px"/>} name="VIA EMAIL CHAT"/>
         <div className="inputtext">
            <label className="inputlabel" htmlFor="text">Name</label>
            <input className="inputdec" type="text"></input>
            <label className="inputlabel" htmlFor="text">E-mail</label>
            <input className="inputdec" type="text"></input>
            <label className="inputlabel" htmlFor="text">Text</label>
            <textarea className="inputdec" name="text"  cols="50" rows="5"></textarea>
         </div>
         <div className="submit">
            <Button name="Submit"/>
         </div>
        </div>
        <img className="imghero" src="./images/service.png" alt="photo"  />
        </div>
        </div>
    )
}
export default Hero;