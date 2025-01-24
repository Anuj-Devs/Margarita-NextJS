import React from 'react'
import './cards.css'
const CarCards = (props: any) => {
  return (
    <div className='myCard'>My Card ID {props.id}</div>
  )
}

export default CarCards