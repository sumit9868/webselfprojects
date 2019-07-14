const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('succesfull execution of the server till now')
})

app.get('/api',(req,res)=>{
    res.send('this is a different get i tried to access')
})

app.post('/wtf',(req,res)=>{
    res.send('this is from a post command')
})
app.listen(3000,()=>{
    console.log('hello the server is running correctly')
})