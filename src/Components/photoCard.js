import React from "react";

const PhotoCard = props =>{
    return(
        <div className="card" key={props.id}>
            <h3 className='photoTitle'>{props.title}</h3>
            <img className='spaceImage' alt="space image" src={props.imgUrl}></img>
            <p className='photoExplanation'>{props.explanation}</p>
        </div>
    );
};

export default PhotoCard;