const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.schema");
const ClassModel = require("./models/class.schema");
const {compare, hash} = require ('bcrypt')
console.log("working");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://gkadesu0000_db_user:ZDTh2PWZjRzaBt3j@mongo-test.ceiam1d.mongodb.net",
  );
  console.log("working 2 ");
};
console.log("working 1 ");
const app = express();
app.use(express.json());
const port = 8080;

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user/create", async (req, res) => {
  const body = req.body;
  console.log(body);

  const hashedPass= await hash(req.body.password, 10)
  const response = await User.create({
    username: body.username,
    email: body.email,
    password: hashedPass,
    age: body.age,
    classId: body.classId
  });

  res.json(response).status(200);
});

app.get("/user", async (req, res) => {
  const users = await User.find().populate("classId");
  res.json(users);
});

app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const users = await User.findById(userId);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

app.post("/class/create", async (req, res) => {
  const body = req.body;

  try {
    const response = await ClassModel.create({
      name: body.name,
      teachers: body.teachers,
      roomNumber: body.roomNumber,
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
