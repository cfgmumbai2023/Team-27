import React, { useState, useEffect } from "react";
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/getUser');
        console.log(response);
        const data = response.data;
        console.log(data);
        const filteredUsers = data.filter(user => !user.isAccepted);
        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleAccept = (userId) => {
    console.log(userId);
    axios
      .put(`http://localhost:5000/auth/updateUser/${userId}`)
      .then((response) => {
        console.log("User accepted:", userId);
        window.location.reload(); // Reload the screen after successful update
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };
  

  const handleReject = (userId) => {
    axios.delete(`http://localhost:5000/auth/deleteUser/${userId}`)
      .then(response => {
        console.log("User rejected:", userId);
        // Handle successful response if needed
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        // Handle error if needed
      });
  };
  

  const UserItem = ({ user }) => {
    return (
      <div>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        {/* Display other user details as needed */}
        <button onClick={() => handleAccept(user._id)}>Accept</button>
        <button onClick={() => handleReject(user._id)}>Reject</button>
      </div>
    );
  };

  return (
    <div>
      <h2>User Table</h2>
      {users.map((user) => (
        <div key={user._id}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
}

export default UserTable;