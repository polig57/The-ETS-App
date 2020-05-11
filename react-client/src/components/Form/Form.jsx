import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: '',
       rank: '',
       etsDate: '',
       leaveDate: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRankChange = this.handleRankChange.bind(this);
    this.handleEtsChange = this.handleEtsChange.bind(this);
    this.handleLeaveChange = this.handleLeaveChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleRankChange(event) {
    this.setState({
      rank: event.target.value
    })
  }

  handleEtsChange(event) {
    this.setState({
      etsDate: event.target.value
    })
  }

  handleLeaveChange(event) {
    this.setState({
      leaveDate: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {

    const {name, rank, etsDate, leaveDate} = this.state;

    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              value={name}
              placeholder='First Last'
              onChange={this.handleNameChange }
            />
          </div>
          <div>
            <label>Rank:</label>
            <select value={rank} onChange={() => this.handleRankChange()}>
              <option value='Select'>Select..</option>
              <option value='PVT'>PVT</option>
              <option value='PV2'>PV2</option>
              <option value='PFC'>PFC</option>
              <option value='SPC'>SPC</option>
              <option value='SPC'>SGT</option>
              <option value='SPC'>SSG</option>
              <option value='SPC'>SFC</option>
              <option value='SPC'>MSG</option>
            </select>
          </div>
          <div>
            <label>ETS Date:</label>
            <input
              type='text'
              value={etsDate}
              placeholder='DD/MM/YYY'
              onChange={this.handleEtsChange }
            />
          </div>
          <div>
          <label>Transition Leave Date:</label>
            <input
              type='text'
              value={leaveDate}
              placeholder='DD/MM/YYY'
              onChange={this.handleLeaveChange }
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form