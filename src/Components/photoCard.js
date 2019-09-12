import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 80%;
`;

const SpaceImage = styled.img`
    max-width: 850px;
    width: 100%
`;

const PictureExplanation = styled.p`
    text-align: center;
`;
const PhotoCard = props =>{
    return(
        <Container key={props.id}>
            <h3 className='photoTitle'>{props.title}</h3>
            <SpaceImage alt="Picture of the Day" src={props.imgUrl}></SpaceImage>
            <PictureExplanation>{props.explanation}</PictureExplanation>
        </Container>
    );
};

export default PhotoCard;