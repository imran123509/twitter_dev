const Tweet =require('../models/tweet');
const CrudRepository =require('./crud_repository');

class tweetRepository extends CrudRepository {
        constructor(){
            super(Tweet)
        }

        async create(data){
            try {
                const tweet=await Tweet.create(data);
                return tweet;
            } catch (error) {
                throw error;
            }
        }

        async getWithComments(id){
            try {
               const tweet=await Tweet.findById(id).populate({
                  path:'comments',
                  populate:{
                    path:'comments'
                  }
               }).lean();
            } catch (error) {
                
            }
        }
        async getAll(offset,limit){
            try {
                const tweet=await Tweet.find().skip(offset).limit(limit)
                return tweet
                
            } catch (error) {
                console.log(error);
            }
        }
        async find(id){
            try {
                const tweet=await Tweet.findById(id).populate({path:'likes'});
                return tweet
            } catch (error) {
                console.log(error)
            }
        }
}

module.exports= tweetRepository;