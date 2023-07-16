// const databaseConnectionString = "mongodb://localhost:27017/senior-project-time-clock"
// get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const mongoose = require("mongoose");

const index = require("./server/routes/app");

const weeksRoutes = require("./server/routes/weeks");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.static(path.join(__dirname, "dist/senior-project-time-clock")));

app.use("/", index);

app.use("/weeks", weeksRoutes);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/senior-project-time-clock/index.html")
  );
});

mongoose
  .connect("mongodb://127.0.0.1:27017/senior-project-time-clock", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed: " + error);
  });

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
// const server = http.createServer(app);

// Tell the server to start listening on the provided port
app.listen(port, function () {
  console.log("API running on localhost: " + port);
});
