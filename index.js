var express = require("express");
var app = express();

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});
server.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
