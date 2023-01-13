import "./App.css";
import "./components/User";
import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setUsers(data.results);
      });
  }, []);

  const handleClick = (user) => {
    console.log(user);
  };
  return (
    <div className="App">
      {users ? (
        users.map((user) => {
          return (
            <div key={user.id.value || user.phone}>
              <User user={user} handleClick={handleClick} />
            </div>
          );
        })
      ) : (
        <span>Loading users...</span>
      )}
    </div>
  );
}

export default App;
