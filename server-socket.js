const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const db = {
  apiKey: "AIzaSyBni909mGq1PPCwnXZIViumjO6JdP4fUBQ",
  authDomain: "chatroulettenode.firebaseapp.com",
  databaseURL: "https://chatroulettenode.firebaseio.com",
  projectId: "chatroulettenode",
  storageBucket: "chatroulettenode.appspot.com",
  messagingSenderId: "447258039553",
  appId: "1:447258039553:web:37615cc46a9d09c8ed3700",
};

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));