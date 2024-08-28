import { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') //get request to the api
    .then((response) => {
        console.log(response.data); 
        setUsers(response.data);
    })
      .catch((error) => console.error('Error fetching data:', error));  // error validation
  }, []); 

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ol className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="text-gray-700 border-b pb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
