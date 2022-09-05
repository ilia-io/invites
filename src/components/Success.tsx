import React from 'react';

type TSuccess = {
  count: number;
  setSentSuccessfully: (b: boolean) => void;
};

export const Success: React.FC<TSuccess> = ({ count, setSentSuccessfully }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h2>Успешно!</h2>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => setSentSuccessfully(false)}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
