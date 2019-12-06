import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: ["Some", "body", "once", "told", "me"],
      userInput: "",
      filteredArray: []
    };
  }
  filterString(userInput) {
    let unfilteredArr = this.state.unfilteredArray;
    let filteredArr = [];

    for (let i = 0; i < unfilteredArr.length; i++) {
      if (unfilteredArr[i].includes(userInput)) {
        filteredArr.push(unfilteredArr[i]);
      }
    }
    this.setState({filteredArray: filteredArr})
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterString(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Array: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
