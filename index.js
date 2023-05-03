import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Users from './userdb.js';
import Contacts from './contactdb.js'
const app = express();
const port = process.env.PORT || 9000;
const connection_url = "mongodb+srv://sharma:85870shubu@cluster0.ch74i8k.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors())
mongoose.connect(connection_url);

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected");

  
});

app.get("/", (req, res) => res.status(200).send("hello World"));

app.post("/contact/create",(req,res)=>{
    const dbuser=req.body;
    Contacts.create(dbuser)
    .then((result) => {
     res.status(201).send(result);
    })
    .catch((err) => {
       res.status(500).send(err);
   })
})




app.post("/user/create",(req,res)=>{
     const dbuser=req.body;
    
     Users.create(dbuser)
     .then((result) => {
      res.status(201).send(result);
     })
     .catch((err) => {
        res.status(500).send(err);
    })
})


app.get("/user/sync",(req,res)=>{
       Users.find({}).then((result) => {
        res.status(200).send(result);
       })
       .catch((err) => {
          res.status(500).send(err);
      })
})



app.listen(port, () => console.log("listening on port : ", port));