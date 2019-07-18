const express = require('express');
const app = express();

app.get('/user/:id', (req, res, next) => {

    if (req.params.id === '0') next('route');
    // else {
        next();
    // }
},
    (req, res) => {
        res.send('regular')
    })
app.post('/user/:id', (req, res) => {
    // const 
    res.send('special');
})
// const myLogger=function (req,res,next) {
//     console.log('this is my logger')
//     next()
// }
// app.use(myLogger)

// const theTime=(req,res,next)=>{
//     req.theTime=Date.now();
//     res.send('this is the end')
//     next()
// }
// app.use(theTime)


// app.get('/',(req,res)=>{
//     const toSend=''+(req.theTime/(60*60*24*365));
//     res.send(toSend)
// })

app.listen(3000, () => {
    console.log('you are listining to 3000')
})     
