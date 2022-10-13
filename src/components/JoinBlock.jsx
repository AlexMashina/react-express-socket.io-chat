import React from "react";

import socket from "../socket";

export const JoinBlock = () => {
  return (
    <div className="join-block">
      <input
        className="join-block__input"
        type="text"
        placeholder="Room ID"
        value=""
      />
      <input
        className="join-block__input"
        type="text"
        placeholder="Ваше имя"
        value=""
      />
      <button className="btn btn-success">Войти</button>
    </div>
  );
};
