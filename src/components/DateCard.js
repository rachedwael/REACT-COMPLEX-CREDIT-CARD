import React, { Component } from 'react';

import './../App.css';
import imag from './../image/3.png';
class DateCard extends Component {
  render() {
    return (
      <div >
        <div class="card-content">
                <div class="card-code"> <h2 class="code-user">5422</h2></div>
                <div class="card-date">
                  <p class="month-year" >MONTH/YEAR</p>
                  <div class="date-des">
                      <p class="valid-thru" >VALID THRU</p>
                      <p class="num-date" >{this.props.datCard}</p>
                  </div>
                </div>
                <img class="master-card" src={require=imag} />
            </div>
      </div>
    );
  }
}

export default DateCard;
