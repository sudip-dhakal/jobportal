const mongoose= require("mongoose");

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    description:{
        type:String,
    },
    website:{
        type:String,
        
    },
    location:{
        type:String,
    },
    logo:{
        type:String, // url to compnay logo file
    }
,

userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}
},{
    timestamps:true,
});


module.exports = mongoose.model('Company', companySchema);

