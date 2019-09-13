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
        setValue(event.target.value)
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
    const InputField = styled.input`
        height: 25px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 20px;
    `;
    const FillableForm = styled.form`
        font-size: 18px;
    `;
    return(
        <div className ="container">
             <FillableForm onSubmit={handleSubmit}>Enter Date: 
               <InputField type="text" value={value} onChange={handleChange} placeholder="yyyy-mm-dd" autoFocus></InputField>
               <SearchButton type="submit">Submit Date</SearchButton>
            </FillableForm>
            <PhotoCard key={photo} title={photo.title} imgUrl={photo.url} explanation={photo.explanation}/>
        </div>
    )
}