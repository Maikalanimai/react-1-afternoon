import React, { Component } from "react";

class Sum extends Component {
    constructor() {
        super()
        this.state ={
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    handleChange1(val) {
        this.setState({number1: val})
    }

    handleChange2(val){
        this.setState({number2: val})
    }

    calcSum(){
        const sum = parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10)
        this.setState({
            sum: sum
        })
    }

  render() {
    return (<div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={e =>this.handleChange1(e.target.value)}/>
        <input className='inputLine' onChange={e => this.handleChange2(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.calcSum()}></button>
        <span className="resultsBox" >sum: {this.state.sum}</span>
    </div>);
  }
}

export default Sum;
