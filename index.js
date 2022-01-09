const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// 4 digit er jekono sonkha dilei hbe...exm,5000,8080 etc.
app.get("/", (req, res) => {
  res.send("hello! this is node-p1");
});
// dynamic api create

const users = [
  {id: 0, name: "Abu", email: "Abu@gmail.com", phone: "01700000000"},
  {id: 1, name: "Babu", email: "Babu@gmail.com", phone: "01700000000"},
  {id: 2, name: "rohim", email: "rohim@gmail.com", phone: "01700000000"},
  {id: 3, name: "korim", email: "korim@gmail.com", phone: "01700000000"},
  {id: 4, name: "Emon", email: "Emon@gmail.com", phone: "01700000000"},
  {id: 5, name: "Fine", email: "Fine@gmail.com", phone: "01700000000"},
];
// search query, filter kore kivabe amra search kora jinis ta paite pari
app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter/ search parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// get all data(users) by req

// app.get("/users", (req, res) => {
//   res.send(users);
// });
//  get single data(user) by using res in dynamic (using params) or dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
