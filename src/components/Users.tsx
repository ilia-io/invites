import React from 'react';
import { Loader } from './Loader';

type TItem = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

type TUsers = {
  items: TItem[];
  isLoading: boolean;
  searchValue: string;
  onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Users: React.FC<TUsers> = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) => {
              const fullname = (item.first_name + item.last_name).toLowerCase();
              return (
                fullname.includes(searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((item) => (
              <li>
                <div>
                  <img className="avatar" src={item.avatar} alt="User" />
                  <div>
                    <h3>
                      {item.first_name} {item.last_name}
                    </h3>
                    <p>
                      <svg
                        viewBox="0 0 96 96"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
                      </svg>
                      {item.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};

export default Users;
