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
<<<<<<< HEAD
    
      setNewItem("")
    }
    
    
=======
    }

    setNewItem("")
>>>>>>> 96a0a7c0f565c2a718e9d0364b64086d8a2cad79
    
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
<<<<<<< HEAD
        <label key={text.id}>{text.title}</label>
        <br />
=======
        <li className="user-messages">{text.title}</li>
>>>>>>> 96a0a7c0f565c2a718e9d0364b64086d8a2cad79
        </>
      })}
    </ul>
  </>
}