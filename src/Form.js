import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
        <div>
          <form>
            <div>
          <input type="text" onChange={this.props.handleInputChange} name="name" placeholder="name" />
            </div>
            <div>
          <input type="text" onChange={this.props.handleInputChange} name="username" placeholder="Username" />
          </div>
          <div>
          <input type="email" onChange={this.props.handleInputChange} name="email" placeholder="Email" />
          </div>
          </form>
          
            <button onClick={this.props.handleSubmit} type="submit" >Submit</button>
        </div>
    );
  }
}

export default Test;
