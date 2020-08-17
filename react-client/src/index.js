import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App.js';
import CSS from './components/App.css';
import Home from './components/Home/Homepage.jsx';
import Form from './components/Form/Form.jsx';
import Timeline from './components/Timeline/Timeline.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/Form' component={Form} />
      <Route path='/Timeline' component={Timeline} />
    </div>
  </Router>,
  document.getElementById('app')
);