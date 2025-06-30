import mongoose from 'mongoose'

const songSchema = new mongoose.Schema(
    {
        tile:{type: String,required: true,},
        artist:{type: String,required: true,},
        imageURL:{type: String,required: true,},
        audioUrl:{type: String,required: true,},
        duration:{type:Number,required: true,},
        albumId: {type: mongoose.Schema.Types.ObjectId,ref:'Album',required: false},
    },{timestamps: true}
)

export const Song = mongoose.model('Song', songSchema)