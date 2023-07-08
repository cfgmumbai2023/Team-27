const mongoose=require ('mongoose');

const UserSchema = new mongoose.Schema({
   type : {
    type : String,
    required : true,
   },
   name : {
    type : String,
    required : true,
   },
   email : {
    type : String,
    required : true,
    unique : true
   },
   password : {
    type : String,
    required : true,
    min : 6,
    max : 50
   },
   classes : {
    type : Number,
   },
   age : {
    type : Number,
    default : true,
   },
   school : {
    type : String,
   },
   contactnumber : {
    type : Number,
    default : true,
   },
   address : {
    type : String,
    default : true,
   },
   uidse :{
    type: [Number],
   },
   language1 : {
    type: String,
    required : true,
   },
   language2 : {
    type: String,
    required : true,
   }
})

/*export default mongoose.model("User", UserSchema)*/
module.exports=mongoose.model("User",UserSchema);