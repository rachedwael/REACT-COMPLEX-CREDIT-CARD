import React, { Component } from 'react';

import './../App.css';

class UserCard extends Component {
  render() {
    return (
      <div >
        <div class="card-user"><h2 class="card-holder" >{this.props.name}</h2></div>
      </div>
    );
  }
}

export default UserCard;
