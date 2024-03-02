const express=require('express');
const app=express();
const DB=require('./src/config/database')
app.listen(8080, async()=>{
    console.log(`server is connected at ${8080}`)
  await DB();
  console.log(`database is connected`)
})