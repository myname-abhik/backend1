import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2" 
const videSchema  = new Schema({
 
    videofile:{
        type:String,
        required:true,

    },
    thumbnail:
    {
        type:String,
        required:true,

    },
    title:
    {
        type:String,
        required:true,

    },
    description:
    {
        type:String,
        required:true,

    },
    duration:
    {
        type:String,
        required:true,

    },
    views:
    {
       type:Number,
       default: 0

    },
    idpublished:{
        type:Boolean,
        default:true
    },
    owner:{
       type:Schema.Types.ObjecId,
       ref:"User"
    }

},
{
    timestamps : true
})
videoSchema.plugin(mongooseAggregatePaginate)
export const video  = mongoose.model("video",videSchema)