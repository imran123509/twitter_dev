const HashTag=require('../models/hashtags');

class HashTagRepository {
    

    async create(data){
          try {
            console.log(data);
             const result=await HashTag.create(data);
             return result;
          } catch (error) {
              console.log('something went wrong in crud repo');
              throw error;
          }
    }

    async bulkCreate(data){
         try {
            const tags=await HashTag.insertMany(data)
         } catch (error) {
            console.log(error);
         }
    }

    async destory(id){
        try {
            const response=await HashTag(id);
            return response;
        } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
        }
    }
    async get(id){
          try {
        const tag=await HashTag(id);
        return tag
          } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
          }
    }

    async getAll(){
        try {
           const result=await HashTag.find({});
           return result; 
        } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
        }
    }
    async update(id, data){
        try {
        const result=await this.model.findByIdAndUpdate(id, data,{new:true});
        return result;
        } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
        }
    }

    async findByName(titleList){
        try {
            const tag=await HashTag.find({
                title:titleList
            }).select('title -id');
            return tag
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports=HashTagRepository
