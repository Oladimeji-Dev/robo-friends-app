import React from 'react'
function Card({name,username,email}) {
    
  return (
    <div className='card'>
        <img src={`https://robohash.org/${username}.png`} alt="" />
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
    </div>
  )
}

export default Card