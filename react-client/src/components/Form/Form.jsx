import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      etsDate: '',
      leaveDate: '',
      rank: '',
      textDisplay: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRankChange = this.handleRankChange.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    console.log('Final Data is', data);
  };

  toggleButton(){
    this.setState((currentState) => ({
        textDisplay: currentState.textDisplay,
    }));
}

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.etsDate]: event.target.value,
      [event.target.leaveDate]: event.target.value,
      [event.target.rank]: event.target.value
    })
  };

  handleRankChange(event) {
    this.setState({
      rank: event.target.value
    })
  }

  render() {
    const { fullName, etsDate, leaveDate, rank } = this.state;


    return (
      <div>
        <h1>theETSapp</h1>
        <form>
          <label>
            Name:
            <input
              type='text'
              value={fullName}
              placeholder='First Last'
              name='fullName'
              onChange={this.handleInputChange}
            />
          </label>
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
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
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
          <p><button onClick={() => this.toggleButton()}>Submit</button></p>
          {!this.state.textDisplay && this.props.text}

          <div id='info'>
            <p>{rank} {fullName} your ETS Date is: {etsDate} and your Leave Date is: {leaveDate}</p>
          </div>
        </form>
      </div>
    )
  }
};

export default Form;


// class Form extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       name: '',
//       rank: 'Select',
//       etsDate: '',
//       leaveDate: ''
//     }
//     // these will all be replaced with the handleChange bind when reuseable function is made
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleRankChange = this.handleRankChange.bind(this);
//     this.handleEtsChange = this.handleEtsChange.bind(this);
//     this.handleLeaveChange = this.handleLeaveChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }
//   // these will all be replaced with a handleChange reuseable function
//   handleNameChange(event) {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   handleRankChange(event) {
//     this.setState({
//       rank: event.target.value
//     })
//   }

//   handleEtsChange(event) {
//     this.setState({
//       etsDate: event.target.value
//     })
//   }

//   handleLeaveChange(event) {
//     this.setState({
//       leaveDate: event.target.value
//     })
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.name);
//       axios.get("http://localhost:8080/Timeline")
//         .then((response) => {
//           console.log(response.data);
//          // this.setState({ items: response.data.articles });
//         })
//         .catch((err) =>
//           console.log(err)
//         )
//     event.preventDefault();
//   }

//   render() {

//     const { name, rank, etsDate, leaveDate } = this.state;

//     return (
//       <div className='App'>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input
//               type='text'
//               value={name}
//               placeholder='First Last'
//               onChange={this.handleNameChange}
//             />
//           </div>
//           <div>
//             <label>Rank:</label>
//             <select value={rank} onChange={this.handleRankChange}>
//               <option value='Select'>Select..</option>
//               {/* this will be dynamically rendered from an array of all ranks */}
//               <option value='PVT'>PVT</option>
//               <option value='PV2'>PV2</option>
//               <option value='PFC'>PFC</option>
//               <option value='SPC'>SPC</option>
//               <option value='SPC'>SGT</option>
//               <option value='SPC'>SSG</option>
//               <option value='SPC'>SFC</option>
//               <option value='SPC'>MSG</option>
//             </select>
//           </div>
//           <div>
//             <label>ETS Date:</label>
//             <input
//               type='text'
//               value={etsDate}
//               placeholder='DD/MM/YYY'
//               onChange={this.handleEtsChange}
//             />
//           </div>
//           <div>
//             <label>Transition Leave Date:</label>
//             <input
//               type='text'
//               value={leaveDate}
//               placeholder='DD/MM/YYY'
//               onChange={this.handleLeaveChange}
//             />
//           </div>
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
