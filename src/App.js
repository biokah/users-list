import "./App.css";
import User from "./components/User"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((result) => result.json())
      .then((data) => setUsers(data.results));
  }, []);

  const handleClick = (user) => {
    console.log(user);
  };

  return (
    <div>
      <div className="container">
        {users ? (
          users.map((user) => {
            return (
              <div key={user.id.value || 
              user.phone}>
                <User user={user} 
                handleClick={handleClick} />
              </div>
            );
          })
        ) : (
          <span>cargando...</span>
        )}
      </div>
    </div>
  );
}

export default App;