import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/Styles';
import history from '../../Routing/history.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  buttonStyle: {
    color: 'white',
    background:'Black'
  }
})


const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        // spacing={1} (if I want spacing around the Cards)
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary">
                Welcome, Transitioning Soldier
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary">
                If you're trying to have a smooth road to transitioning out of the Army at Fort Hood, let this be the tool you reference that will streamline your transition process and ensure you hit all key objectives before you can receive that sweet, sweet DD-214. The timeline provided will highlight objectives to meet by month, beginning 24 months before your Expiration Term of Service(ETS) date, all the way to your final day in the Army.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary">
                You only transition out of the Army once in your career, do you know what to do? Almost all Soldiers and their leaders don't have experience transitioning out of the Army. This guides them on what that transition will look like out of Fort Hood and what needs to be done to collect that sweet DD-214 on your ETS day.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary">
                This allows Soldiers to access a single resource to help meet all their goals needed for a smooth transition.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary">
                'So you don't know what I need to do next? or what can help me?' - Once a transitioning SPC, E-4 Mafia, Veteran.
              </Typography>
            </CardContent>
          </Card>

          <Link to='/Form'>
            <Button className={classes.buttonStyle} variant='contained' onClick={() => history.push('/Form')}>
              See Timeline
            </Button>
          </Link>
        </Grid>

      </Grid>
    </div>
  )
}

export default Home;