import React, { Component } from 'react'
import axios from 'axios'
import List from './List/List.jsx';
import Form from './Form/Form.jsx';

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
      </div>
    )
  }
}
export default App;