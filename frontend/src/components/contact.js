import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const contact = ({ name, contact, updateMode, deleteMode }) => {
  return (
    <div className='contactbox'>
      <div className='name'>{name}</div>
      <div className='contact'>{contact}</div>
      <div className='icons'>
        <BiEdit className='icon' onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteMode} />
      </div>
    </div>
  )
}

export default contact;