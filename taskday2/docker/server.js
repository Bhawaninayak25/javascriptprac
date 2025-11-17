require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MONGO CONNECT
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error:", err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input name="name" placeholder="Name" /><br/>
      <input name="email" placeholder="Email" /><br/>
      <input name="password" placeholder="Password" /><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

// 🔥 Working POST /login Route
app.post("/login", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("Data Saved to MongoDB!");
  } catch (err) {
    res.send("Error: " + err);
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT || 3000);
});
