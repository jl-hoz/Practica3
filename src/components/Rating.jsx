import React from "react";
import "./style.css";

function Rating(props){

    return (
        <div className="Stars">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>(4)</span>
        </div>
    );
}

function a(){
    console.log("que mierdads");
}

export default Rating;