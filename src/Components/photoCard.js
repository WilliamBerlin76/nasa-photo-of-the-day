import React from "react";
import "../../src/App.css/";

const photoCard = props =>{
    return(
        <div className="card">
            <img className='spaceImage' alt="space image" src="{props.imgURL}"></img>
        </div>
    );
};

export default photoCard;