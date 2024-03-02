const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const JWT_SECRERT="JKFDHFKD45"
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
}, {timestamps:true});

userSchema.pre('save', function(next){
      const user=this;
      const SALT=bcrypt.SALT(9);
      const encryptedPassword=bcrypt.hash(user.password, SALT);
      user.password=encryptedPassword;
      next();
})
userSchema.method.comparePassword=function compare(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.method.genJWT=function generate(){
    return jwt.sign({id:this._id, email:this.email}, JWT_SECRERT, {
        expiresIn:'1h'
    })
}
const User=mongoose.model('User', userSchema);
export default User;