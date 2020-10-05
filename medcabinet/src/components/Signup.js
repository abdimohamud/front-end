import React from 'react'
import {useForm} from "react-hook-form"
import { registerUser } from '../actions/'
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

export default function Signup(){
    const { push } = useHistory()
    const dispatch = useDispatch();
    const {register, handleSubmit, errors, setValue} = useForm();

    const onSubmit = data => {
        console.log(data);
        const newUser = {
            username: data.username,
            password: data.password
        }
        dispatch(registerUser(newUser, push));
        // history.push('/login')
        setValue('first-name', '')
        setValue('last-name', '')
        setValue('username', '')
        setValue('password', '')
        setValue('email', '')
    };

    return (
        <FormDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Styledh2>Med Cabinet</Styledh2>
            <h3><b>Signup</b></h3>
            
            <b>First Name:</b>
            <StyledInput type="text" placeholder="First Name" name="first" ref={register({required: "First name required", minlength: {value: 1, message: "First Name required"}})} />
            
            <b>Last Name:</b>
            <StyledInput type="text" placeholder="Last Name" name="last" ref={register({required: "Last name required", minlength: {value: 1, message: "Last Name required"}})} />
            
            <b>Email:</b>
            <StyledInput type="email" placeholder="Example@example.com" name="email" ref={register({required: "Email required"})} />
            
            <b>Username:</b>
            <StyledInput type="text" placeholder="Username" name="username" ref={register({required: "Username required", minlength: {value: 4, message: "Usernames must be atleast 4 characters long"}})} />
            
            <b>Password:</b>
            <StyledInput type="password" placeholder="Password" name="password" ref={register({required: "Password required", minlength: {value: 8, message:"Passwords must be atleast 8 characters long"}})} />
            
            <StyledP>We respect your privacy. Names and emails are not displayed publically. By creating your Med Cabinet account, you agree to the terms of use and privacy policy.</StyledP>
            {errors.first && <StyledRequired>{errors.first.message}</StyledRequired>}
            {errors.last && <StyledRequired>{errors.last.message}</StyledRequired>}
            {errors.email && <StyledRequired>{errors.email.message}</StyledRequired>}
            {errors.username && <StyledRequired>{errors.username.message}</StyledRequired>}
            {errors.password && <StyledRequired>{errors.password.message}</StyledRequired>}
            
            <StyledSubmit type="submit" value="Sign up"/>
            <LinkDiv>
                <Link to ='/Login'>Already have an account? Login here!</Link>
            </LinkDiv>
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
    padding: 1vh 10vw 1vh .5vw; 
    margin-bottom: 1vh;
    border-radius: 5px;
`
const StyledP = styled.p`
    width: 20vw;
    text-align: center;
`

const StyledSubmit = styled.input`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1vh 0vw;
    text-align:center;
    border-radius: 5px;
    margin-left: 5vw;
`
const LinkDiv = styled.div`
    margin: 1vh 0 0 3.2vw;
`
const StyledRequired = styled.p`
    color: red;
`

