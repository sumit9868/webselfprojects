const express=require('express')
const app=express();


app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.post('/', function (req,res) {
 res.send('Got a POST request');   
})
app.put('/user', function (req,res) {
    res.send('Got a PUT request at /user');   
})
app.delete('/user',function (req,res) {
    res.send('Got a DELETE request at /user');   
})
app.all('/',function (req,res) {
    res.send('in the app.all handler');
})



app.listen(3000,()=>{
    console.log('hello world, with all diffrent express requests');
})