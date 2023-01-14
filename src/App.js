import "./App.css";
import User from "./components/User";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [string, setString] = useState("");
  const [backupsUsers,setBackupUSers]=useState([]);
  const [gender,setGender]=useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((result) => result.json())
      .then((data) => {
        setUsers(data.results)
      setBackupUSers(data.results);
    })
  }, []);

  useEffect(() => {
    if(users && string){
    const filteredUsers = users.filter(user => {
      return user.name.first.toLowerCase().includes(string.toLowerCase()) || user.name.last.toLowerCase().includes(string.toLowerCase())
    })
    setUsers(filteredUsers)
  } else if(users && !string){
      setUsers(backupsUsers);
  }
},[string])

useEffect(()=>{
  if(gender.length){
    const filteredUsers=backupsUsers.filter(user=>{
      return user.gender===gender
    })
    setUsers(filteredUsers)
  } else {
    setUsers(backupsUsers)
  }
},[gender])

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  const toggleModal = () => {
    setSelectedUser(null);
  };

  const filterByName = (e) => {
    setString(e.target.value);
  };

  const filterByGender=(e)=>{
    setGender(e.target.value);
  }

  return (
    <main>
      {selectedUser && <Modal user={selectedUser} toggleModal={toggleModal} />}
      <div className="container-wrapper m-auto grid md:grid-cols-2 grid-cols-1 gap-7 pt-10">
        <input
          onChange={filterByName}
          type="text"
          placeholder="Search..."
          className="border border-solid border-gray-700 p-2 rounded"
        />
        {string}
        <select onChange={filterByGender} className="border border-solid border-gray-700 py-2 rounded">
          <option value="">Please choose an option</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        {users ? (
          users.map((user) => {
            return (
              <div key={user.id.value || user.phone}>
                <User
                  user={user}
                  handleClick={handleClick}
                  selectedUser={selectedUser}
                />
              </div>
            );
          })
        ) : (
          <span>cargando...</span>
        )}
      </div>
    </main>
  );
}

export default App;
