import { useState } from "react"
import './style.css'

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [texts, setNewTexts] = useState([])

  function handleAdd(e){
    e.preventDefault()
    
    if (newItem != ""){
      setNewTexts((currentTexts) => {
        return [...currentTexts, {id: crypto.randomUUID(), title: newItem, completed: false},]
      })
    }

    setNewItem("")
    
  }

  return <>
    <form onSubmit={handleAdd}>
      <div className="form">
      <label className="title" htmlFor="" >Type anything</label>
      <br />
      <div className="type-and-add">
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" className="type-text"/>
        <button className="add-button">Add</button>
      </div>
      
      </div>
    </form>
    <ul className="all-user-messages">
      {texts.map(text => {
        return <>
        <li className="user-messages">{text.title}</li>
        </>
      })}
    </ul>
  </>
}