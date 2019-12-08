import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  //  Ask why this didn't work vvvvvv
  // checkPalindrome(input) {
  //   let posPali = input.split("");
  //   console.log(posPali);
  //   let revPosPali = input.split("").reverse();
  //   console.log(revPosPali);
  //   if (posPali === revPosPali) {
  //     this.setState({
  //       palindrome: "true"
  //     });
  //   } else {
  //     this.setState({
  //       palindrome: "false"
  //     });
  //   }
  //   console.log(this.state.palindrome);
  // }
  //^^^^^^^^^^^
  checkPalindrome(input) {
    let forwards = input;
    let backwards = input;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.checkPalindrome(this.state.userInput)}
        >
          Check Text
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
