import React, { useReducer, useEffect } from "react";

import "./App.css";
import { JoinBlock } from "./components/JoinBlock";
import reducer from "./reducer";
import socket from "./socket";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("room:join", obj);
  };

  useEffect(() => {
    socket.on("room:joined", (users) => {
      console.log("a new user", users);
    });
  }, []);

  return (
    <div className="app">
      {!state.joined && <JoinBlock onLogin={onLogin} />}
    </div>
  );
}

export default App;
