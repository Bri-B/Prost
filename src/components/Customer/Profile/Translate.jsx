import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Capture from './camera/Capture.jsx';

export default function Translate({setView}) {
  const [img, setImg] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return(
    <Grid container justify="center">
      <ArrowBackIosIcon color="primary" onClick={()=> setView('Home')} />
      Hello from Translate 
      <Grid container justify="center">
        <Capture
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      </Grid>
    </Grid>
  )
}