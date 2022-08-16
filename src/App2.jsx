import './App.css';
import SearchBox from './component/SearchBox';
import CardList from './component/CardList';
import {useState, useEffect} from 'react'

function App2() {
   useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {setRobots(json); setLoading(false)})
    .catch((err) =>{console.log(err)})

   },[])
    const [searchInput, setSearchInput] = useState('')
    const [searchuser, setSearchuser] = useState([])
    const [robots, setRobots] = useState([])
    const [loading, setLoading] = useState(false)

   const  updateSearchInput = (event) =>{
        let target  = event.target.value
        setSearchInput(target)
    
        const filteredRobots = target ? robots.filter(user => (
          user.name.toLowerCase().includes(target.toLowerCase()) 
        )): []

        setSearchuser([...filteredRobots])
        
      }
  return (
    <div className='App'>
        <SearchBox updateSearchInput = {updateSearchInput} />
        {!loading &&  !robots.length && <h1 style={{textAlign: 'center'}}>Data Not Found...</h1>}
        {loading && <h1 style={{textAlign: 'center'}}>Loading ...</h1>}
        <CardList users = {searchInput ?searchuser :robots} searchUser = {searchuser} />

    </div>
  )
}

export default App2