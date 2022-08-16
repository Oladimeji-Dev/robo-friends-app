import React, { Component } from 'react'
import './App.css';
import SearchBox from './component/SearchBox';
import CardList from './component/CardList';


export class App extends Component {
  constructor(){
    super()
    this.state = {
      searchInput:'',
      searchuser:[],
      robots:[],
      loading:false,
    }
    
  }

  updateSearchInput = (event) =>{
    let target  = event.target.value
    this.setState({searchInput:target})

    const filteredRobots = target ? this.state.robots.filter(user => (
      user.name.toLowerCase().includes(target.toLowerCase()) 
    )): []

    this.setState({searchuser: [...filteredRobots]})
    
  }
  componentDidMount = ()=>{
    this.setState({loading:true})

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({robots:json, loading: false}))
    .catch((err) =>{console.log(err)})

    }

  render() {

    return (
      <div className="App">
        <SearchBox updateSearchInput = {this.updateSearchInput} />
        {this.state.loading && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
        <CardList users = {this.state.searchInput ? this.state.searchuser :this.state.robots} searchUser = {this.state.searchuser} />
      </div>
    );
  }
}

export default App
