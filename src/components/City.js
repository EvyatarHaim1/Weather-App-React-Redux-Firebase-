import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { animationToStatus } from '../animationToStatus';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from '../firebase';

export default function City({ dayNum, weatherStatus, weatherC, weatherF, cityName, id }) {

  const unit = useSelector((state) => state.setting.unit);

  const deleteFromFavorites = () => {
    db.collection("favorites").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit;
  }

  return (
    <Div>
      {cityName ? cityName : dayNum}
      <Img src={animationToStatus(weatherStatus)} alt="animation" />
      {!unit ? `${weatherC} C°` : `${convertToF(weatherC)} °F`}< br />
      <P>{weatherStatus}</P>
      {cityName && <Icon><DeleteIcon color="primary" onClick={deleteFromFavorites} /></Icon>}
    </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: column;
padding-top: 2%;
text-align: center;
justify-content:center;
align-items: center;
width:30%;
height:30%;
border: 2px solid lightgray;
margin-bottom: 3%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
@media (max-width: 700px){
  width:100%;
height:100%;
}

`

const Img = styled.img`
width:20%;
`
const Icon = styled.div`
display: flex;
:hover{
  cursor: pointer;
}
`
const P = styled.p`
font-size: 10px;
`