// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Utilisation d'axios pour obtenir les données de l'API JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Mise à jour de l'état avec les données des utilisateurs
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); // Le tableau vide [] signifie que ce hook useEffect s'exécute uniquement une fois après le rendu initial

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
