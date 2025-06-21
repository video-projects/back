const { io } = require("socket.io-client");
const socket = io("http://localhost:9070");

socket.on("connect", () => {
  console.log("Connected with id:", socket.id);
  socket.emit("message", { user: "Ali", text: "سلام به همه!" });
});

socket.on("message", (msg) => {
  console.log("Message from server:", msg);
});