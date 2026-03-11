import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
 
 name :{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
    unique:true,
 },
 password:{
    type:String,
    required:true,
    minlength:6,
    select:false,  //Means password will NOT be returned in queries by default.
 },

});

userSchema.methods.comparePassword= async function (password){
    return await bcrypt.compare(password , this.password);
};

userSchema.set('toJSON' , {
    transform: function(doc,ret){
        delete ret.password;
        delete ret.__v;
        return ret;
  }
});

// Remove 'next' from the arguments entirely
userSchema.pre("save", async function () {
  // 1. Only hash if modified
  if (!this.isModified("password")) return;

  // 2. Hash the password
  // Mongoose will wait for this Promise to resolve before saving the document
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

export default User;
