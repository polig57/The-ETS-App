import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      etsDate: '',
      leaveDate: '',
      rank: '',
      textDisplay: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRankChange = this.handleRankChange.bind(this);
    this.toggleButton = this.toggleButton.bind(this);

  };

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    console.log('Final Data is', data);
  };

  toggleButton() {
    let userInput = document.getElementById("text");
    let displayInput = userInput.style.display;

    if (displayInput == 'block') {
      userInput.style.display='none';
    } else {
      userInput.style.display='block';
    }
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.lastName]: event.target.value,
      [event.target.etsDate]: event.target.value,
      [event.target.leaveDate]: event.target.value,
      [event.target.rank]: event.target.value,
    })
  };

  handleRankChange(event) {
    this.setState({
      rank: event.target.value
    })
  }

  render() {
    const { firstName, lastName, etsDate, leaveDate, rank } = this.state;

    return (
      <div className="form-field">
        <h1>theETSapp</h1>
        <form className="form-input">
          <label>
            Rank:
              <select
              value={rank}
              onChange={this.handleRankChange}>
              <option value='Select'>Select..</option>
              {/* this will be dynamically rendered from an array of all ranks */}
              <option value='PVT'>PVT</option>
              <option value='PV2'>PV2</option>
              <option value='PFC'>PFC</option>
              <option value='SPC'>SPC</option>
            </select>
          </label>
          <p></p>
          <label>
            First Name:
            <input
              type='text'
              value={firstName}
              placeholder='First'
              name='firstName'
              onChange={this.handleInputChange}
            />
          </label>
          <p></p>
          <label>
            Last Name:
            <input
              type='text'
              value={lastName}
              placeholder='Last'
              name='lastName'
              onChange={this.handleInputChange}
            />
          </label>
          <p></p>
          <label>
            ETS Date:
            <input
              type='text'
              value={etsDate}
              placeholder='MM/DD/YYYY'
              name='etsDate'
              onChange={this.handleInputChange}
            />
          </label>
          <p></p>
          <label>
            Transition Leave Date:
            <input
              type='text'
              value={leaveDate}
              placeholder='MM/DD/YYYY'
              name='leaveDate'
              onChange={this.handleInputChange}
            />
          </label>
        </form>
          <div id='info'>
            <p>
              <button onClick={() => this.toggleButton()}> Submit </button>
            </p>
            <p id='text'>
              {rank} {lastName}, {firstName} your ETS Date is: {etsDate} and your Leave Date is: {leaveDate}. Here's a look at your Transition timeline.
            </p>
          </div>
      </div>
    )
  }
};

export default Form;
