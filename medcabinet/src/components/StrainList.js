import React, {useState} from 'react'

import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import strains from '../theData'
import styled, {keyframes} from 'styled-components'

const initialSearch = {
    search:"",
    
}
const initialFilter= {
  type:""  
}

const StrainList = () => {
    const [search, setSearch] = useState(initialSearch);
    const [filter, setFilter] = useState(initialFilter)
    const [data, setData] = useState(strains);
    const [image, setImage] = useState('')

    let history = useHistory();
    function routeToItem(ev, item) {
        ev.preventDefault();
        history.push(`/StrainList/${item.strain_name}`);
    }

    // const convert = strains.map((strain) => ({ ...strain, neuser_id: uuser_idv4() }));
    
    const onChange = (e) => {
        setSearch({ [e.target.name]: e.target.value });
        
      };
    const onSelectChange = (e) => {
        setFilter({ [e.target.name]: e.target.value })
        if (e.target.value == "all" ) {
            setData(strains)
        } else {
            filterIt(e.target.value)
        }
        
    }
    const filterIt = (value) => {
        const filteredData = strains.map((item) => {return item})
        const filt =filteredData.filter((item)=> item.type === value)
        setData(filt);
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
   

    function makeLowerCase(value) {
        return value.toString().toLowerCase();
      }
    
    
    return (
        <>
        <StrainMain>
            <SearchBoxDiv>
                <StrainInput type="text" name="search" placeholder="Strain" value={search.search} onChange={onChange} />
                <StrainSelect name="type" onChange={onSelectChange} >
                        <option value='all'>All</option>
                        <option value="indica">Indica</option>
                        <option value="sativa">Sativa</option>
                        <option value="hybrid">Hybrid</option>
                    </StrainSelect>
            </SearchBoxDiv>
            <div className="items-list-wrapper">
                {data
                .filter((item)=>makeLowerCase(item.strain_name).includes(makeLowerCase(search.search)))
                .map((item)=>(
                    <ItemCard className ="item-card" key={item.strain_name} item={item} onClick={(ev) => routeToItem(ev, item)}>
                        <ListImg className="item-list-image" src={imageIt(item.type)} alt={item.strain_name} />
                        <StrainType>{item.strain_name}</StrainType>
                        <StrainType>{item.type}</StrainType>
                        <StrainType>{item.flavors}</StrainType>
                    </ItemCard>
                    
                ))}
            </div>
        </StrainMain>
        </>
    )
}

const StrainMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;
    width: 25vw;
    margin-left: 37vw;
    padding-top: 3vh;
    border-radius: 10px;
    font-family: 'Maven Pro', sans-serif;
`

const SearchBoxDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 15vw;
`

const StrainSelect = styled.select`
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`

const StrainInput = styled.input` 
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`

const ItemCard = styled.div`
    border-bottom: 1px dashed black;
    padding: 3vh 0;
`

const ListImg = styled.img`
    border-radius: 10px;
`

const StrainType = styled.h4`
    text-transform: capitalize;
`

export default StrainList;