import React from 'react'
import Card from './Card'


function CardList(props) {
 
  return (
    <div className='card-list'>
        { 
          props.users.map((item)=>{
            return(
                <Card
                key={item.id}
                name = {item.name}
                username = {item.username}
                email = {item.email}
                />
            )
                
            })
        }
       
        
    </div>
  )
}

export default CardList