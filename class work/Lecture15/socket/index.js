const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send('OK')
})

io.on('connection',socket=>{
    console.log('client connected');

    // socket.on('chat',msg=>{
    //     console.log(msg);
    // })
    
    socket.
})
app.listen(3000,()=>{
    console.log('listining at 3000');
})