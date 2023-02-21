require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Message = require("./models/Message");

app.use(express.json());

app.post("/api/messages", async (req, res) => {
  const { name, email, mg } = req.body;
  const message = new Message({ name, email, mg });
  await message.save();
  res.json(message);
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zktrumw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Started on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
