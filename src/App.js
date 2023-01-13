
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
  const handleClick = (user) => {
    console.log(user);
  }
  return (
    // className="text-indigo-400
    <div className="container m-auto users-wrapper grid grid-cols-2 gap-2">
      
      { users ? 
        users.map(user => {
          return <div key={user.id.value || 
            user.phone
             }>
              <User user={user} handleClick={handleClick}/></div>
        })
       : <span>cargando...</span> }
    </div>
  );
}

export default App;
