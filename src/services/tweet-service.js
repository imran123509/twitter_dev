const {TweetRepository, HashTagRepository}=require('../repository/index')

class TweetService{
    constructor(){
      this.tweetRepository=new TweetRepository();
      this.hashTagRepository=new HashTagRepository();
    }

   async create(data){
        const content=data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags=tags.map((tag)=> tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.createa(data);
        const alreadyPresenttags=await this.hashTagRepository.findByName(tags);
        alreadyPresenttags=alreadyPresenttags.map((tag)=>tag.title)
        return tweet;

    }
}
module.exports=TweetService;  