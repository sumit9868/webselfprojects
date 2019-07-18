const express=require('express')
const app=express()
const router=express.Router()

router.use((req,res,next)=>{
    console.log('Time:',Date.now())
    next();
})

router.use('/user/:id',(req,res,next)=>{
    console.log('Requested URL:',req.originalUrl)
    next()
})

router.get('/user/:id',(req,res,next)=>{
    if(req.params.id==='0')next('route')
    else next()
},(req,res,next)=>{
    res.send('regular')
})
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.send('special')
  })
  app.use('/',router)

app.listen(3000,()=>{
    console.log('you are listining to 3000');
    
})