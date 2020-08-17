import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import history from './history.js';
import Home from '../components/Home/Homepage.jsx';
import Form from '../components/Form/Form.jsx';
import Timeline from '../components/Timeline/Timeline.jsx';

export default class Routes extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Form' component={Form} />
          <Route path='/Timeline' component={Timeline} />
        </Switch>

      </Router>
    )
  }
}