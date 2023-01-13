
import "./App.css";
import User from "./components/User"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(result => result.json())
    .then(data => setUsers(data.results))
    
  },[])
  return (
    <div className="text-indigo-400">
      <User />
      { users ? 
        users.map(user => {
          return <span key={user.id.value || 
            user.phone
             }>{user.name.first}</span>
        })
       : <span>cargando...</span> }
    </div>
  );
}

export default App;
