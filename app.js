const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req,res)=>{res.send('ok')});
app.get('/demo', (req,res)=>{res.send('Hello Demo')});
app.get('/world', (req,res)=>{res.send('Hello World')});
app.post('/t',(req,res)=> {res.send('Hello T')});