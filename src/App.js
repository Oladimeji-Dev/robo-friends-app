//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import SearchBox from './component/SearchBox';
import CardList from './component/CardList';
import users from './user.json'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      searchInput:'',
      searchuser:[]
    }
    
  }

  updateSearchInput = (event) =>{
    let target  = event.target.value
    this.setState({searchInput:target})

    const filteredRobots = target ? users.filter(user => (
      user.name.toLowerCase().includes(target.toLowerCase()) 
    )): []

    this.setState({searchuser: [...filteredRobots]})
    
  }

  render() {
   

    console.log("Filtered Robots: ", this.state.searchuser);
    console.log("Filtered input: ", this.state.searchInput);

    return (
      <div className="App">
        <SearchBox updateSearchInput = {this.updateSearchInput} />
        <CardList users = {this.state.searchInput ? this.state.searchuser :users} />
      </div>
    );
  }
}

export default App
