import React from "react";

function Button(props){
    return(
        <button className={props.isreally?"stn ":"ptn" } id="buttonssall">{props.icons}  
          {props.name}</button>
    )
}

export default Button;