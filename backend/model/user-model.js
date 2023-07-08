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
    required : true,
   },
   school : {
    type : String,
   },
   contactnumber : {
    type : Number,
    required : true,
   },
   address : {
    type : String,
    required : true,
   },
   uidse :{
    type: Number,
   },
   language1 : {
    type: String,
   },
   language2 : {
      type: String,
     }
})

/*export default mongoose.model("User", UserSchema)*/
module.exports=mongoose.model("User",UserSchema);