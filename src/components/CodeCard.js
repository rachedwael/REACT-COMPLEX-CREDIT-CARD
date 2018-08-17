import React, { Component } from 'react';

import './../App.css';

class CodeCard extends Component {
  render() {
    return (
      <div >
        <div class="card-num"> <h2 class="num-card-text"> {this.props.code} </h2></div>
      </div>
    );
  }
}

export default CodeCard;
