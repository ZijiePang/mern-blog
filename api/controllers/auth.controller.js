import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next) => {
    const { userName, email, password} = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
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
        next(error);
    }


}