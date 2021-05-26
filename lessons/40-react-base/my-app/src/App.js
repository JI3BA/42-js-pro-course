import React from "react"
import './App.css';

class Clicker extends React.Component{
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  refresh = () => {
    this.setState({count: 0});
  }

  render(){
    return(
      <div className="container">
      <div className='counter'>
         <p className='showNumber'>{this.state.count}</p>
         <div className='buttonContainer'>
          <button className='increment' onClick={this.increment}>+</button>
          <button className='refresh' onClick={this.refresh}>🗘</button>
          <button className='decrement' onClick={this.decrement}>-</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Clicker;