import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Checkin({setView}) {
  return(
    <div>
      <ArrowBackIosIcon color="primary" onClick={()=> setView('Home')} />
      Hello from Checkin 
      </div>
    )
}