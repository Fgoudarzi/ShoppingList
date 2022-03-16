import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [index, setIndex] = useState(0)
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState('')
  const [alert, setAlert] = useState({})

  function submitHandler(e) {
    e.preventDefault()
    let item = name.trim()
    if (item === '') {

    } else if (item !== '' && !isEditing) {
      addItem()
      let obj = { item: item, type: 'added' }
      setAlert(obj)


    } else if (item !== '' && isEditing) {

      const beforeItems = list.filter(e => (e.id !== editId) && (e.id < editId))
      const afterItems = list.filter(e => (e.id !== editId) && (e.id > editId))
      const updatedItem = [{ 'id': editId, 'value': item }]

      const updatedList = beforeItems.concat(updatedItem).concat(afterItems)
      setList(updatedList)


      let obj = { item: item, type: 'edited' }
      setAlert(obj)
      setName('')
      setEditId('')
    }



  }

  function addItem() {
    setIndex(prev => prev + 1)
    setList(prev => [...prev, { 'id': index, 'value': name }])
    setName('')
    setIsEditing(false)
  }

  function deleteItem(id, value) {
    const newlist = list.filter(item => item.id !== id)
    setList(newlist)
    let obj = { item: value, type: 'deleted' }
    setAlert(obj)
    setIsEditing(false)
  }

  function editItem(id, value) {
    setName(value);
    setEditId(id)
    setIsEditing(true)

  }

  function clear() {
    setAlert({})
    setList([])
  }


  return (
    <div className='section-center'>

      <form className='grocery-form' onSubmit={submitHandler}>
        <Alert {...alert}></Alert>
        <h3>Shopping List</h3>
        <div className='form-control'>
          <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                className='grocery'
                placeholder='e.g. Milk' />
          <button
                type='submit' 
                className='submit-btn'>
                {isEditing ? 'edit' : 'submit'}
             </button>
        </div>
      </form>
      <div className='grocery-container'>

        {list.length > 0 && <List
                                list={list}
                                deleteItem={deleteItem}
                                editItem={editItem}
                                editId={editId}
                             />}
      </div>
      <button className='clear-btn' onClick={clear}> clear</button>
    </div>
  )

}

export default App
