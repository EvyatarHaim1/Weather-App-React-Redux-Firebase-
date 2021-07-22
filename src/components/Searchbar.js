import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { wheater_app_key, baseURL } from '../keys'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { Input } from '@material-ui/core';

export default function Searchbar() {

    const [city, setCity,] = useState('tel aviv');
    const [CityData, setCityData] = useState({});
    const [results, setResults] = useState([])

    // const cityName = useSelector((state) => state.city.city);
    // const locationKey = useSelector((state) => state.city.locationKey);

    const dispatch = useDispatch()

    useEffect(() => {
        try {
            fetch(`${baseURL}/locations/v1/cities/autocomplete?apikey=${wheater_app_key}&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setResults(data);
                });
        } catch (error) {
            console.log(error)
        }
    }, [city])

    const clearResults = () => {
        setResults([])
    }

    const chooseCity = (cityName) => {
        setCity('')
        setResults([])
        dispatch({ type: "UPDATE_CITY", payload: cityName })
    }

    return (
        <>
            <Div>
                <SearchIcon />
                <Input style={{ width: '85%', marginLeft: '2%' }} value={city} disableUnderline={true}
                    placeholder="Select city" onChange={(e) => setCity(e.target.value)} />
                {city.length >= 1 && city !== 'tel aviv' &&
                    <CancelIcon onClick={clearResults} />}
            </Div>
            {results.length >= 1 && city !== 'tel aviv' &&
                <List>
                    {results.map(city => (
                        <Option onClick={() => chooseCity(city.LocalizedName)}>
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
   align-items: center;
   background-color:whitesmoke;
   width:30%;
   height: 35px;
   border-radius:20px;
   padding-left:5px;
   border: 1px solid;
   cursor:pointer;
:hover {
    opacity: 0.8;
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
