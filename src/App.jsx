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
    <label className="title" htmlFor="" >Chatroom</label>
    <div className="page-container">
      <div className="div-form">
        <form onSubmit={handleAdd} className="form-element">
          <div className="form-content">
          
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" className="type-text"/>
            <button className="add-button">Add</button>
          
          
          </div>
        </form>
      </div>
      
      <ul className="all-user-messages">
        {texts.map(text => {
          return <>
          <li className="user-messages">{text.title}</li>
          <br />
          </>
        })}
      </ul>

    </div>
    
  </>
}