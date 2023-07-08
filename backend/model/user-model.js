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
   class : {
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
   language : {
    type: [String],
    required : true,
   }
})

export default mongoose.model("User", UserSchema)