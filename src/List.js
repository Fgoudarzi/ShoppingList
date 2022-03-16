import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, deleteItem, editItem, editId }) => {
  return (<div className='grocery-list'>
    {list.map((i) => {
      const c = editId === i.id ? 'edit-mode-on' : ''
      const style = 'grocery-item ' + c
      return (
        <article key={i.id} className={style}>
          <p className='title'>{i.value}</p>
          <div className='btn-container'>
            <button className="edit-btn" onClick={(e) => { editItem(i.id, i.value) }} > <FaEdit></FaEdit> </button>
            <button className='delete-btn' onClick={(e) => { deleteItem(i.id, i.value) }}> <FaTrash></FaTrash> </button>
          </div>
        </article>
      )
    })}
  </div>)
}

export default List
