import React from 'react';
import { Route, NavLink, useHistory, useParams } from "react-router-dom";
import {connect} from 'react-redux'
import strains from '../theData'
import styled, {keyframes} from 'styled-components'
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Strain = (props) => {
    const history = useHistory();
    const newstrains = strains.map(item  => {
      return {user_id:props.id, strain_name:item.strain_name, type:item.type, rating:item.rating, effects:item.effects, flavors: item.flavors, description: item.description}
    })
    const {strain_name} = useParams();
    const item = newstrains.find(
        (thing) => `${thing.strain_name}` === strain_name
      );
    
      if (!strains.length || !item) {
        return <h2>Loading item data...</h2>;
      }
      const imageIt = (type) => {
        if (type == 'sativa'){
            return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Sativa-e1595555346200-uai-258x237.png'
        }
        if (type == 'indica'){
            return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Indica-e1595555429573-uai-258x216.png' 
        }
        if( type == 'hybrid') {
            return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Hybrid-e1595555500547-uai-258x216.png'
        }
        else{
            return 'error'
        }
    }

    const handleSubmit = (item) => {
      axiosWithAuth()
        .post('/api/strain/add', item)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err));
        axiosWithAuth()
        .get('/api/strain/all')
        .then(res => {
          props.saveIt(res.data)
        })
        .catch(err => console.log(err));
    };
    
    
    return (
        <StrainDiv className="item-wrapper">
            <StrainImg className="item-list-image" src={imageIt(item.type)} alt={item.strain_name} />
            <StrainName>{item.strain_name}</StrainName>
            <StrainType>{item.type}</StrainType> 
            <StrainP>Rating : {item.rating}/5</StrainP>
            <StrainP>{item.description}</StrainP>
           
            <StrainBtn onClick ={(e)=>{ e.preventDefault(); handleSubmit(item);}  }>Add to List</StrainBtn>
        </StrainDiv>
    )

}
function mapStateToProps(state) {
  console.log(state);
  return {
    id: state.id
  };
}
export default connect(mapStateToProps, {}) (Strain);

const StrainDiv = styled.div`
  font-family: 'Maven Pro', sans-serif;
  background-color:#F7F7F7;
  padding: 3vh 0;
  border-radius: 10px;
`

const StrainImg = styled.img`
  max-width: 13vw;
  border: none;
  border-radius: 10px;
`

const StrainName = styled.h4`
  text-transform: capitalize;
  font-size: 2rem;
  margin: 0;
`

const StrainType = styled.h4`
  text-transform: capitalize;
  font-size: 1.5rem;
`

const StrainP = styled.p`
  max-width: 25vw;
  margin: 0 0 3vh 11vw;
`
const StrainBtn = styled.button`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1vh 0vw;
    text-align:center;
    border-radius: 5px;
    margin-left: .75vw;
`

