import React, { Component } from 'react';
import Test from './Form';
import axios from 'axios';
class MainForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleInputChange(e) {
    this.setState({
      [e.target.name]:(e.target.value)
    });
  }
  handleSubmit(e){
    //alert(`Name: ${this.state.name} , Phone: ${this.state.username} , Email: ${this.state.email}  `);
   const user = {
    name: this.state.name,
    username: this.state.username,
    email:this.state.email,
  }

  axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
  
  .then(res=>{
    console.log(res);
    console.log(res.data.user);
  })
  .catch(error=>console.log('parsing failed',error));

 
 
  }

  render() {
    return (
     <div>
      <Test 
       handleInputChange={this.handleInputChange}
       handleSubmit={this.handleSubmit}
        />
     </div>
    );
  }
}

export default MainForm;

