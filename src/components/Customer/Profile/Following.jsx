import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteOutlinedIcon from  '@material-ui/icons/DeleteOutlined'
import HistoryList from './HistoryList.jsx'

export default function Following({setView, customerId, followingList}) {
  // const [num, setNum] = useState(0);
  const [list, setList] = useState(null);

  const getAll = async (id) => {
    // /db/customer/one/1
    //promise all
    fetch(`${process.env.REDIRECT}/db/customer/one/${id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    // getData();
  }, []);

  return(
    <div>
      <ArrowBackIosIcon color="primary" onClick={()=> setView('Home')} />
      Hello from Following
      {/* {list && (list.map((bar, key) => 
        <div key={key}>
        <p>{bar.bar_name}</p>
        <p>{bar.address}</p> 
        <p>{bar.phone_number}</p> 
        <DeleteOutlinedIcon onClick={() => deleteFollowing(bar.id)}/>
      </div>
      ))}  */}
    </div>
  )
}