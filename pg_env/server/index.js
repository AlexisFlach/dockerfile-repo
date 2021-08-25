const express = require("express");
// const cors = require("cors");
const app = express();


// app.use(cors());
app.use(express.urlencoded)

const { Pool } = require("pg");

const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS users (name STRING)")
    .catch((err) => console.error(err));
});

app.get("/", async (req, res) => {
  res.send('hello world')
});
app.get("/users", async (req, res) => {
  const users = await pgClient.query("SELECT * from users");
  res.send(users.rows);
  res.send('hello world')
});

app.post("/register", async (req, res) => {
  const {name} = req.body
  res.send('inserting')
  // pgClient.query("INSERT INTO users(name) VALUES($1)", [name]);
  res.send({ working: true });
});

app.listen(5000, (err) => {
  console.log("Listening");
});