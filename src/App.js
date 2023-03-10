
import "./App.css";
import User from "./components/User"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [string, setString] = useState("")
  const [backupUsers, setBackupUsers] = useState([])
  const [gender, setGender] = useState("")

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(result => result.json())
    .then((data) => {
      setUsers(data.results)
      setBackupUsers(data.results)
    }
      )
  },[])

  useEffect(()=>{
    if(backupUsers && string) {
      const filteredUsers = backupUsers.filter(user =>{
        return user.name.first.toLowerCase().includes(string.toLowerCase()) || user.name.last.toLowerCase().includes(string.toLowerCase())
      })
      setUsers(filteredUsers)
    } else if(backupUsers && !string) {
      setUsers(backupUsers)
    }
  }, [string])

  useEffect(()=>{
    if(gender.length) {
      const filteredUsers = backupUsers.filter(user => {
        return user.gender === gender
      })
      setUsers(filteredUsers)
    } else {
      setUsers(backupUsers)
    }
  }, [gender])

  const handleClick = (user) => {
    setSelectedUser(user)
  }

  const toggleModal = () => {
    setSelectedUser(null)
  }

  const filterByName = (event) => {
    setString(event.target.value)
  }

  const filterByGender = (event) => {
    setGender(event.target.value)
  }

  return (
    <main>
      {selectedUser && <Modal user={selectedUser} toggleModal={toggleModal} />}
      <div className="container-wrapper m-auto grid md:grid-cols-2 grid-cols-1 gap-7 pt-10">
        <input onChange={filterByName} type="text" placeholder="Search..." className="border border-solid border-gray-700 p-2 rounded" />
        <select className="border border-solid border-gray-700 py-2 rounded" onChange={filterByGender}>
          <option value="">Please choose an option</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        { users ? 
          users.map(user => {
            return <div key={user.id.value || 
              user.phone
              }>
              <User user={user} handleClick={handleClick} selectedUser={selectedUser} /></div >
          })
        : <span>cargando...</span> }
      </div>
    </main>
  );
}

export default App;
