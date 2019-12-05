import React, { Component } from 'react';
import './index.css'
// import TopicBrowser from './components/TopicBrowser/TopicBrowser'
import Sum from './components/Topics/Sum'
import Palindrome from './components/Topics/Palindrome'
import FilterString from './components/Topics/FilterString'
import FilterObject from './components/Topics/FilterObject'
import EvenAndOdd from './components/Topics/EvenAndOdd'

class App extends Component {
  render() {
    return(<div>
      <EvenAndOdd />
      <FilterObject />
      <Sum />
      <Palindrome />
      <FilterString />
      

    </div>
    )
  }
}

export default App;
