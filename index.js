const express=require('express');
const app=express();
const DB=require('./src/config/database');
//const hashTagRepository=require('./src/repository/hashtag-repository')
const {tweetRepository}=require('./src/repository/index');
const TweetService=require('./src/services/tweet-service')
app.listen(8080, async()=>{
    console.log(`server is connected at ${8080}`)
  await DB();
  console.log(`database is connected`);
   let repo=new TweetService();
   const tweet=repo.create({content: "thsodsofjfik"})
   
   
})