import React from 'react'
import {useForm} from "react-hook-form"
import styled, {keyframes} from 'styled-components'
export default function StrainForm(){
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <FormDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Styledh2>Product Search</Styledh2>
            <b>Strain:</b>
            <StyledInput type="text" placeholder="Strain" ref={register} />
            <b>Effect:</b>
            <StyledInput type="text" placeholder="Enter the desired effect" ref={register} />
            <b>Flavor:</b>
            <StyledInput type="text" placeholder="Enter the desired flavor" ref={register} />
            <b>Description:</b>
            <StyledInput type="text" placeholder="Description" ref={register}/>
            <b>Type:</b>
            <StyledSelect>
                <option value="">Select a type</option>
                <option value="Sativa">Sativa</option>
                <option value="Indica">Inidica</option>
                <option value="Hybrid">Hybrid</option>
            </StyledSelect>
            <b>Rating:</b>
            <StyledSelect>
                <option value="">Select a rating</option>
                <option value="one">★☆☆☆☆</option>
                <option value="two">★★☆☆☆</option>
                <option value="three">★★★☆☆</option>
                <option value="four">★★★★☆</option>
                <option value="five">★★★★★</option>
            </StyledSelect>
            <StyledSubmit type="submit" value="Search" />
        </StyledForm>
        </FormDiv>
    )
}
const FormDiv = styled.div`
    display: flex;
    background-color: #F7F7F7;
    width: 25vw;
    margin: 5vh 35vw;
    padding: 3vh 0 5vh 5vw;
    text-align: left;
    font-family: 'Maven Pro', sans-serif;
`
const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
`
const Styledh2 = styled.h2`
    text-align:center;
    font-size: 2rem;
`
const StyledInput = styled.input` 
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`
const StyledSelect = styled.select`
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`
const StyledSubmit = styled.input`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-left: 5vw
`