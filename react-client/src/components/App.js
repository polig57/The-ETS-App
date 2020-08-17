import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form/Form.jsx';
import Timeline from './Timeline/Timeline.jsx';
import Home from './Home/Homepage.jsx';
// import List from './List/List.jsx';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routes from '../Routing/Routes.jsx';
import history from '../Routing/history.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      items: []
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/Form' component={Form} />
          <Route path='/Timeline' component={Timeline} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;