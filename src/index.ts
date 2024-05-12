console.log("hello world");import express from 'express';
const app = express();

//app.use(express.json());
app.get('/', function(req,res) {
    res.json("hello world");
})