const express=require('express')
const app=express();

app.use(express.static(__dirname+'./public'));

app.set('view engine','hbs')

const tracks=[{
    _id:1,
    title:'sign of the times',
    singer:'neil horan',
    image:'https://slm-assets0.secondlife.com/assets/19185904/view_large/sign_of_the_times.jpg?1512793041',
    file:'sign .mp3'
},
{
    _id:2,
    title:'running with the wolves',
    singer:'aurora',
    image:'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/RunningWithTheWolves.jpg/220px-RunningWithTheWolves.jpg',
    file:'wolves.mp3'
}]

app.get('/',(req,res)=>{
    const {id}=req.query
    const selectedTrack=tracks.find(t=>t._id==id);
    res.render('index',{tracks,selectedTrack})
})





// app.get('/add',(req,res)=>{
//     req.send()
// })
// app.get('/:id',(req,res)=>{
//     req.send()
// })
// app.post('/add',(req,res)=>{

// })

app.listen(3000,()=>{
    console.log('the server is ready');
    
})
