const {MongoClient}= require('mongodb')

const client=new MongoClient('mongodb://localhost:27017');

const getDB=dbName=>
client
.connect()
.then(()=>client.db(dbName))
.catch(err=>console.log('error',err))

// user.insertOne()

// const 
