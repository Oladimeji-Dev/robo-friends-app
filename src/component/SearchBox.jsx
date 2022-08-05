function SearchBox({updateSearchInput}) {
  return (
    <div className="tc">
        <h1 className='f2 brand'>Robo Friends</h1>
        <input onChange={updateSearchInput} type="text" placeholder="Search..." className="search-box"/>
    </div>
  )
}

export default SearchBox