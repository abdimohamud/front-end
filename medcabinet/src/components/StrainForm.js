import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

const initialValues = {
    strain_name: '',
    type: '',
    rating: '',
    effects: '',
    flavors: '',
    description: ''

}

const StrainForm = ({setList, list}) => {
    const [values , setValues] = useState(initialValues)
    const history = useHistory();
    const {id} = useParams();
    console.log(values)
    useEffect(() => {
        const itemy = list.find(
            (thing) => `${thing.id}` === id);
            setValues(itemy)
       
          
      }, [id]);
    

    // const handleChanges = (event) => {
    //     setValues({...values,[event.target.name] : event.target.value });
    //   };
    const handleChanges = (e) => {
        // let value = e.target.value;
        // if (e.target.name === 'effects' || 'flavors') {
        //   value = value.split(',');
        // }
        
    
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/strain/edit/${id}`, values)
        .then((res)=> {
            setValues(res.data);
            setList(list.map(item =>{
                if(item.id== id){
                    return values
                } else{
                    return item
                }
            }))
            history.push(`/StrainList`);
        }); 
    };

    return(
        <div className='update'>
            <Styledh2>Update a Strain</Styledh2>
            <FormDiv className='form'>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput type= 'text' name='strain_name' value={values.strain_name} onChange={handleChanges} placeholder='Strain Name'  />
                    <StyledSelect name="type" onChange={handleChanges}><option value="indica">Indica</option> <option value="sativa">Sativa</option><option value="hybrid">Hybrid</option></StyledSelect> 
                    <StyledInput type='number' name ='rating' value={values.rating} onChange={handleChanges} placeholder='Rating'  />
                    <StyledInput type='text' name ='effects' value={values.effects} onChange={handleChanges} placeholder='Effects'  />
                    <StyledInput type='text' name ='flavors' value={values.flavors} onChange={handleChanges} placeholder='Flavors'  />
                    <StyledInput type='text' name ='description' value={values.description} onChange={handleChanges} placeholder='Description'  />
                    <StyledSubmit>UPDATE</StyledSubmit> 
                </StyledForm>
                
            </FormDiv>
            

        </div>
    )
}
const Styledh2 = styled.h2`
    text-align:center;
    font-size: 2rem;
    font-family: 'Maven Pro', sans-serif;
`

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

const StyledSubmit = styled.button`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-left: 5vw
`

export default StrainForm;