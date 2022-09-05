import React, { useEffect, useState } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

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

const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchValue(event.target.value);
};

  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
    </div>
  );
}

export default App;
