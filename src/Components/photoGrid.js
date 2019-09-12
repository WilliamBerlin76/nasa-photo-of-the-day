import React, { useState, useEffect } from "react";
import PhotoCard from "./photoCard";
import axios from 'axios';

export default function PhotoGrid () {
    const [photo, setPhoto] = useState([])
    const [photoDate, setPhotoDate]  = useState('')
    const [value, setValue]  = useState('')
    const handleChange = event => {
        setValue(event.target.value)
        console.log(value);
    };
    const handleSubmit = event => {
        event.preventDefault()
        setPhotoDate(value);
    };
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=nKLSHkTvuo8u7mPb7UKNQm0wfBUJlrFtgaRdyZhd&date=${photoDate}`)
        .then(response => {
            const photoInfo = response.data
            console.log(photoInfo);
            setPhoto(photoInfo)
        })
        .catch(error => {
            console.log('no space pic for you', error)
        })
    }, [photoDate])

    return(
        <div className ="container">
             <form onSubmit={handleSubmit}>Enter Date:
               <input type="text" value={value} onChange={handleChange} placeholder=""></input>
               <button type="submit">Submit Date</button>
            </form>
            <PhotoCard key={photo} title={photo.title} imgUrl={photo.url} explanation={photo.explanation}/>
        </div>
    )
}