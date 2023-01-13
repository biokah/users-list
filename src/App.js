
import "./App.css";
import User from "./components/User"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState(null)
  const[selectedUser, setSelectedUser]= useState(null)

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(result => result.json())
    .then(data => setUsers(data.results))
    
  },[])

  const handleClick = (user) => {
    setSelectedUser(user)
  }

  const toggleModal = () => {
    
  }


  return (
    <main>
      <Modal />
      <div className="container-wrapper m-auto grid md:grid-cols-2 grid-cols-1 gap-7">
      {selectedUser ? <Modal user={selectedUser}/> : null}
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
