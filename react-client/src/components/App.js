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

  componentDidMount() {
    axios.get(`ec2-13-59-33-181.us-east-2.compute.amazonaws.com`)
      .then(res => {
        const dataFromServer = res.data;
        this.setState({ dataFromServer });
      });
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