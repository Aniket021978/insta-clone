const mongoose=require('mongoose');
const plm=require("passport-local-mongoose");
mongoose.connect('mongodb+srv://aniket021978:aniket021978@cluster0.8zslwh8.mongodb.net/');

const userSchema=mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  bio: String,
  profileImage: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}]
});
userSchema.plugin(plm);
module.exports=mongoose.model("user",userSchema);
