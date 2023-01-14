import "./App.css";
import User from "./components/User";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
    .then(result => result.json())
    .then(data => setUsers(data.results))
    
  },[])

  const handleClick = (user) => {
    console.log("sale el modal con la info del usuario: "+user.name.first)
  }

  const toggleModal = () => {
    
  }


  return (
    <main>
      
      <div className="container-wrapper m-auto grid md:grid-cols-2 grid-cols-1 gap-7">
        { users ? 
          users.map(user => {
            return <div key={user.id.value || 
              user.phone
              }>
              <User user={user} handleClick={handleClick}/></div >
          })
        : <span>cargando...</span> }
      </div>
    </main>
  );
}

export default App;
