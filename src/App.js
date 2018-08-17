import React, { Component } from 'react';
import image from './image/2.jpg';

import './App.css';
import UserCard from './components/UserCard';
import DateCard from './components/DateCard';
import CodeCard from './components/CodeCard';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      codeCard:"****************",
      nameUser:"Your Name here",
      dateCard:"----"
    }
  }

  

  addCodeCard=(value)=>{
        
    if(value==='')
    {
      this.setState({codeCard:"****************"})
    }
    else if (!isNaN(Number(value)))
    {
      this.setState({codeCard:value})
    }
    }
  


  addNameCard=(value)=>{
    if(value==='')
    {
      this.setState({nameUser:"Your Name here"})
    }
    if (isNaN(value))
    {
      this.setState({nameUser:value})
    }
  }

  addDateCard=(value)=>{

    if(value==='')
    {
      this.setState({dateCard:"----"})
    }
    else if (!isNaN(Number(value)))
    {
 
      this.setState({dateCard:value})
    }
    let ch1=String(this.state.dateCard).slice(0,2)
    let ch2=String(this.state.dateCard).slice(2,4)
    let ch3
    if(Number(ch1)>12)
     {
        ch3="12"+ch2
        this.setState({dateCard:ch3})
     }
  }

  

  render() {
    return (
      <div className="full-container">
      <div class="card-container">
            <div class="name-card"><h1> CREDIT CARD</h1></div>
            <img class="puce" src={require=image} />
            <CodeCard code={this.state.codeCard.split('').map((el,i)=>{
   
                if((i%4===0)&&(i!==0))
                {
                  return " "+el
                }
                else return el
            })}/>

            <DateCard datCard={this.state.dateCard.split('').map((el,i)=>{
                if(i===2)
                {

                  return "/"+el
                }
                else return el
            })}/>
            <UserCard name={this.state.nameUser} />
        </div>
        <form className="form-input">
          <input type="text" className="from-text code-input" value={this.state.codeCard==="****************"?"":this.state.codeCard} maxLength={Number(16)} onChange={(e)=>{this.addCodeCard(e.target.value)}}/>
          <input type="text" className="from-text name-input" value={this.state.nameUser==="Your Name here"?"":this.state.nameUser} maxLength={Number(20)} onChange={(e)=>{this.addNameCard(e.target.value.toUpperCase())}}/>
          <input type="text" className="from-text date-input" value={this.state.dateCard==="----"?"":this.state.dateCard} maxLength={Number(4)} onChange={(e)=>{this.addDateCard(e.target.value)}}/>
        </form>

      </div>
    );
  }
}

export default App;
