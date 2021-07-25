import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { Input } from '@material-ui/core';
import ApiRequests from '../api/apiRequests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar() {

    const [city, setCity,] = useState('');
    const [results, setResults] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        fetchLocationAutocomplete()
    }, [city])

    const notify = () => toast("Something went wrong with fetching cities");

    const fetchLocationAutocomplete = async () => {
        try {
            let res = await ApiRequests.locationAutocomplete(city);
            console.log(res)
            setResults(res);
        } catch (error) {
            notify()
            console.log(error)
        }
    }

    const clearResults = () => {
        setCity('');
        setResults([]);
    }

    const chooseCity = (city) => {
        setCity('');
        setResults([]);
        dispatch({ type: "UPDATE_CITY", payload: { city: city.LocalizedName, key: city.Key } })
    }

    return (
        <>
            <ToastContainer />
            <Div>
                <SearchIcon />
                <Input style={{ width: '85%', marginLeft: '2%' }}
                    disableUnderline={true}
                    placeholder="Select city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
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
   background-color:rgb(180, 180, 180);
   margin-top: 3%;
   @media (max-width: 800px) {
    width:60%;
    margin-top: 5%;
  }
`
const Option = styled.p`
padding-bottom: 2%;
padding-top: -2%;
:hover{
    background-color:lightgray;
    cursor: pointer;
}
`
