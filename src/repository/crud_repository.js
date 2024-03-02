const User=require('../models/tweet');

class CrudRepository {
    constructor(model){
        this.model=model
    }

    async create(data){
          try {
            console.log(data);
             const result=await User.create(data);
             return result;
          } catch (error) {
              console.log('something went wrong in crud repo');
              throw error;
          }
    }

    async destory(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
        }
    }
    async get(id){
          try {
        const result=await this.model.findById(id);
        return result
          } catch (error) {
            console.log('something went wrong with the crud repo');
            throw error;
          }
    }

    async getAll(){
        try {
           const result=await this.model.find({});
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
}

export default CrudRepository;
