import { useEffect, useState } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((error) => {
        console.error(error);
        alert('Ошибка при получении пользователей');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
    </div>
  );
}

export default App;
