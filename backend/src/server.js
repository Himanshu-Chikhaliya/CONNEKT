const express = require("express")
const cors = require('cors');
const passport = require("passport");
const http = require('http');
const { apiRouter } = require("./Routes");
const { connectDatabase } = require("./config/db.config");
const { passportStrategy } = require("./config/passport.config");
const { PORT } = require("./config/env.config");

connectDatabase();



const app = express();

// Bodyparser middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));

passport.use(passportStrategy);
app.use(passport.initialize());

// Routes
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("API is running..");
});

const server = http.createServer(app)
const io = require('socket.io')(server, {
  cors:{
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
    // credentials: true
  }
});

io.on("connection", (socket) => {
  // console.log("User Connect")
  socket.on("setup", (userData) => {
    socket.join(userData.id)
    console.log(userData.id)
    socket.emit("connected")
  })

  socket.on("join chat", (room) => {
    socket.join(room)
    console.log("User Join to ROOM :  " + room)
  })

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

})

server.listen(PORT, () => {
  console.log("Server Work in ", PORT);
})