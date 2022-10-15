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
app.use(express.json());

app.get("/rooms", (req, res) => {
  res.send("jnden");
});

app.post("/rooms", (req, res) => {
  const { roomId } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on("room:join", ({ roomId, userName }) => {
    socket.join(roomId);
    console.log(rooms.get(roomId));
    rooms.get(roomId).get("users").set(socket.id, userName);
    const users = [...rooms.get(roomId).get("users").values()];
    socket.broadcast.to(roomId).emit("room:joined", users);
  });
  console.log("socket connected", socket.id);
});

server.listen(5000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Server started!");
});
