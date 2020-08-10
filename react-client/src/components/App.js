import React, { Component } from 'react'
import axios from 'axios'
import List from './List/List.jsx';
import Form from './Form/Form.jsx';
import Timeline from './Timeline/Timeline.jsx'
import Home from './Home/Homepage.jsx'

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
      <div>
        <Form />
        <Timeline />
      </div>
    )
  }
}
export default App;