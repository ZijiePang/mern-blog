import mongoose from 'mongoose'

// model's rules
const userSchema = new mongoose.Schema({
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
    }, {timestamps: true});

// create the model
const User = mongoose.model('User', userSchema);

export default User;