import React, { useEffect, useState } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);

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

  const onClickInvite = (id: number) => {
    // @ts-ignore
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      // @ts-ignore
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        invites={invites}
        onClickInvite={onClickInvite}
      />
    </div>
  );
}

export default App;
