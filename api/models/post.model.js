import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        default: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=996&t=st=1722222643~exp=1722223243~hmac=ae376a8148c9f7e93141e98162edffc118b90918ffde69ef52e1861ea932627d',
        required: true,
    },
    category:{
        type:String,
        default: 'uncategorized',
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

export default Post;