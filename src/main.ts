import express from "express";
import { config } from "dotenv";
config();

const app = express();
 
app.get("/", function (req, res) {
  res.send("Hello World");
});
const PORT = process.env.PORT || 2999
app.listen(PORT, ()=>{
  console.log("Server Running At Port", PORT)
});