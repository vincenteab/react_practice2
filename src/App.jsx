import { useState } from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  
  return <>
    <form>
      <div>
      <label htmlFor="" >Type anything</label>
      <br />
      <input type="text"/>
      <button>Add</button>
      </div>
    </form>
    <div className="user-messages">
      <label>Text1</label>
      <br />
      <label>Text2</label>
      <br />
      <label>Text3</label>
      <br />
    </div>
  </>
}