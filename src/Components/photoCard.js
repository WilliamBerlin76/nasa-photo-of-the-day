import React from "react";

const PhotoCard = props =>{
    return(
        <div className="card" key={props.id}>
            <img className='spaceImage' alt="space image" src={props.imgUrl}></img>
        </div>
    );
};

export default PhotoCard;