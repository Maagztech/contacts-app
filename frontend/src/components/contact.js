import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const contact = ({ name, contact }) => {
  return (
    <div className='contactbox'>
      <div className='name'>{name}</div>
      <div className='contact'>{contact}</div>
      <div className='icons'>
        <BiEdit className='icon' />
        <AiFillDelete className='icon'  />
      </div>
    </div>
  )
}

export default contact;