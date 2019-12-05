import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Ashe",
          role: "Marksman",
          region: "Freljord",
          specialEvent: true
        },
        {
          name: "Tryndamere",
          role: "Bruiser",
          region: "Freljord",
          reworkNeeded: true
        },
        {
          name: "Shen",
          role: "Bruiser",
          region: "Ionia",
          reworkNeeded: false
        }
      ],
      userInput: "",
      filteredArray: ""
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterArr() {
    console.log(this);
    let filtered = this.state.unFilteredArray.filter(element => {
      return element.hasOwnProperty(this.state.userInput);
    });
    this.setState({ filteredArray: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button className="confirmationButton" onClick={() => this.filterArr()}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
