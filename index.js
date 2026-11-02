require('dotenv').config();

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/king', (req,res) => {
    res.send('King.com');
});

app.get('/login', (req,res)=>{
    res.send('<h1> Login here guzz...</h1>');
});
const port=process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});