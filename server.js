const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map();

app.use(cors());

app.get("/rooms", (req, res) => {
  res.send("jnden");
});

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});

server.listen(5000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Server started!");
});
