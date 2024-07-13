import mongoose from 'mongoose'

// model's rules
const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture:{
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }, 
    {timestamps: true}
);

// create the model
const User = mongoose.model('User', userSchema);

export default User;