import React from 'react';
import {
  Grid,
  Button,
  makeStyles,
  ButtonGroup,
  Typography,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HistoryIcon from '@material-ui/icons/History';
import ContactsIcon from '@material-ui/icons/Contacts';
import Logout from '../../Logout.jsx';

const useStyles = makeStyles(() => ({
  image: {
    height: '100px',
    width: '100px',
    borderRadius: '50px',
  },
  spacer: {
    margin: '10px 0 10px 0',
  },
  buttonSpacer: {
    margin: '5px 0 0 0',
  },
  buttonGroup: {
    width: '100px',
  },
  button: {
    width: '200px',
    margin: '5px 0 0 0',
  },
}));

const Home = ({
  setView,
  name,
  setViewValue,
  img,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.spacer}
        column="center"
      >
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <img
            src={img || 'https://i.imgur.com/jRnsxbB.png'}
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography variant="subtitle1">
            @
            {name}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        column="center"
      >
        <Grid
          item
          container
          direction="row"
          column="center"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setView('EContact')}
          >
            Emergency Contact
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="row"
          column="center"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setView('Checkin')}
          >
            Check in
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="row"
          column="center"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setView('Translate')}
          >
            Translate
          </Button>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.buttonSpacer}
        >
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView('Friend')}
              className={classes.buttonGroup}
            >
              <ContactsIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView('Ride')}
              className={classes.buttonGroup}
            >
              <AirportShuttleIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.buttonSpacer}
        >
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView('History')}
              className={classes.buttonGroup}
            >
              <HistoryIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView('Favorite')}
              className={classes.buttonGroup}
            >
              <StarBorderIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.buttonSpacer}
        >
          <Logout setViewValue={setViewValue} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Home;
// export default function Home({
//   setView, name, setViewValue, img,
// }) {
//   return (
//     <Grid container direction="column" justify="center" alignItems="center">
//       <Grid item container direction="row" justify="center" alignItems="center">
//         <img src={img || 'https://i.imgur.com/jRnsxbB.png'} style={{ height: '100px', width: '100px' }} />
//       </Grid>
//       <Grid item container direction="row" justify="center" alignItems="center">
//         <Typography variant="subtitle1">
//           @
//           {name}
//         </Typography>
//       </Grid>
//       <Button variant="outlined" color="primary" onClick={() => setView('Favorite')}>
//         Favorite Spots
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('EContact')}>
//         Emergency Contact
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('Ride')}>
//         Call a Ride
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('Checkin')}>
//         Check in
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('History')}>
//         History
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('Translate')}>
//         Translate
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setView('Friend')}>
//         Friend's List
//       </Button>
//       <Logout setViewValue={setViewValue} />
//     </Grid>
//   );
// }
