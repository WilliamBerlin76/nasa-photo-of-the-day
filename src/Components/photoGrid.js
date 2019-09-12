import React, { useState, useEffect } from "react";
import PhotoCard from "./photoCard";
import axios from 'axios';
import styled from "styled-components";

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

    const SearchButton = styled.button`
        margin-top: 10px;
        color: #4B0082;
        background: silver;
        border: 0px solid silver;
        border-radius: 20px;
        width: 150px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s ease-in;
        &:hover {
            background: #4B0082;
            color: silver
        }
    `;
  
    const FillableForm = styled.form`
        margin: 0 auto;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        width: 150px;
        align-items: center;
    `;
    return(
        <div className ="container">
             <FillableForm onSubmit={handleSubmit}>Enter Date: 
               <input type="text" value={value} onChange={handleChange} placeholder="yyyy-mm-dd"></input>
               <SearchButton type="submit">Submit Date</SearchButton>
            </FillableForm>
            <PhotoCard key={photo} title={photo.title} imgUrl={photo.url} explanation={photo.explanation}/>
        </div>
    )
}