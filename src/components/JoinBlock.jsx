import React, { useState } from "react";
import axios from "axios";

import socket from "../socket";

export const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert("Неверные данные");
    }

    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post("/rooms", obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        className="join-block__input"
        type="text"
        placeholder="Room ID"
        onChange={(e) => setRoomId(e.target.value)}
        value={roomId}
      />
      <input
        className="join-block__input"
        type="text"
        placeholder="Ваше имя"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button
        className="btn btn-success"
        onClick={onEnter}
        disabled={isLoading}
      >
        {isLoading ? "Идет вход..." : "Войти"}
      </button>
    </div>
  );
};
