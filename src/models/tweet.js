const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet can not be more than 250 words']
    },
    likes:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Like'
        }
    ],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    image:{
        type:String
    }
}, {timestamps:true});

const Tweet=mongoose.model('Tweet', tweetSchema);

export default Tweet;