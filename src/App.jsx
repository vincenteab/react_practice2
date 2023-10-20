import { useState } from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [texts, setNewTexts] = useState([])

  function handleAdd(e){
    e.preventDefault()
    
    setNewTexts((currentTexts) => {
      return [...currentTexts, {id: crypto.randomUUID(), title: newItem, completed: false},]
    })
  }

  return <>
    <form onSubmit={handleAdd}>
      <div>
      <label htmlFor="" >Type anything</label>
      <br />
      <input value={newItem} onChange={e => setNewItem(e.target.value)}type="text"/>
      <button>Add</button>
      </div>
    </form>
    <div className="user-messages">
      {texts.map(text => {
        return <>
        <label>{text.title}</label>
        <br />
        </>
      })}
    </div>
  </>
}