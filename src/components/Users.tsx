import React from 'react';
import { Loader } from './Loader';
import { User } from './User';

type TItem = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
};

type TUsers = {
  items: TItem[];
  isLoading: boolean;
  searchValue: string;
  onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invites: number[];
  onClickInvite: (id: number) => void;
};

const Users: React.FC<TUsers> = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
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
              <User
                key={item.id}
                {...item}
                isInvited={invites.includes(item.id)}
                onClickInvite={onClickInvite}
              />
            ))}
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};

export default Users;
