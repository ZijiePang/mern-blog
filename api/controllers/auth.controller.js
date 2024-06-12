import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    const { userName, email, password} = (req.body);

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        return res.status(400).json({message: 'All fields are required'});
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword,
    });

    try{
        await newUser.save();
        res.json("Successful Signup");
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}