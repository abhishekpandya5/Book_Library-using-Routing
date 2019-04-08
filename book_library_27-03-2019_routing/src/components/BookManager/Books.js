import "./Books.css"
import React from 'react'

function Books(props) {
  return (
    <div>
       <img src={props.data.thumbnailUrl} />
        <h3>{props.data.title}</h3> 
    </div>
  )
}

export default Books;
