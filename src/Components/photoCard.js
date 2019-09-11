import React from "react";

const PhotoCard = props =>{
    return(
        <div className="card" key={props.id}>
            <img className='spaceImage' alt="space image" src={props.imgUrl}></img>
            <p className='photoExplanation'>{props.explanation}</p>
        </div>
    );
};

export default PhotoCard;