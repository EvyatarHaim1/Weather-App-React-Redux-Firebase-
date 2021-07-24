import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { Input } from '@material-ui/core';
import ApiRequests from '../api/apiRequests';

export default function Searchbar() {

    const [input, setInput] = useState('')
    const [city, setCity,] = useState('');
    const [results, setResults] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        fetchLocationAutocomplete()
    }, [city])

    const fetchLocationAutocomplete = async () => {
        try {
            let res = await ApiRequests.locationAutocomplete(city);
            console.log('10 results from api', res)
            setResults(res);
        } catch (error) {
            console.log(error)
        }
    }

    const clearResults = () => {
        setInput('')
        setResults([])
    }

    const chooseCity = (city) => {
        setInput('')
        setResults([])
        console.log('this is the chosen city', city.LocalizedName, city.Key)
        dispatch({ type: "UPDATE_CITY", payload: { city: city.LocalizedName, key: city.Key } })
    }

    return (
        <>
            <Div>
                <SearchIcon />
                <Input style={{ width: '85%', marginLeft: '2%' }} value={city} disableUnderline={true}
                    placeholder="Select city" onChange={(e) => setCity(e.target.value)} />
                {city.length >= 1 &&
                    <CancelIcon onClick={clearResults} />}
            </Div>
            {results.length >= 1 &&
                <List>
                    {results.map(city => (
                        <Option key={city}
                            onClick={() => chooseCity(city)}>
                            {city.Country.ID}{'  '}{city.LocalizedName}
                        </Option>
                    ))}
                </List>
            }
        </>
    )
}

const Div = styled.div`
display: flex;
flex-direction: row;
margin-top: 2%;
margin-bottom: -3%;
   align-items: center;
   background-color:whitesmoke;
   width:30%;
   height: 35px;
   border-radius:20px;
   padding-left:5px;
   border: 1px solid lightgray;
   cursor:pointer;
:hover {
    opacity: 0.8;
}
@media (max-width: 800px) {
    width:60%;
    margin-top: 5%;
  }
`
const List = styled.div`
   border-radius:20px;
   border: 1px solid;
   width:30%;
   text-align:center;
   background-color:whitesmoke;
`
const Option = styled.p`
padding-bottom: 2%;
padding-top: -2%;
:hover{
    background-color:lightgray;
    cursor: pointer;
}
`
