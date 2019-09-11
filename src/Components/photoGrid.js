import React, { useState, useEffect } from "react";
import PhotoCard from "./photoCard";
import axios from 'axios';

export default function PhotoGrid () {
    const [photo, setPhoto] = useState([])
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=nKLSHkTvuo8u7mPb7UKNQm0wfBUJlrFtgaRdyZhd')
        .then(response => {
            const photoInfo = response.data
            console.log(photoInfo);
            setPhoto(photoInfo)
        })
        .catch(error => {
            console.log('no space pic for you', error)
        })
    }, [])

    return(
        <div className ="container">
            <PhotoCard key={photo} imgUrl={photo.url} explanation={photo.explanation}/>
        </div>
    )
}