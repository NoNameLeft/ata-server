import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import * as config from '../config/config';
import User from '../models/User';

export const register = async ({ username, email, password }) => {
    const user = new User({ username, email, password });
    return await user.save();
};

export const login = async ({ username, password }) => {
    let user = await User.findOne({username});

    if (!user) throw { message: 'Invalid email or password.' };

    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw { message: 'Invalid email or password.' };

    let token = jsonwebtoken.sign({ _id: user._id, username: user.username }, config.default.secret);

    return token;
};

export const getUserById = async function (userId) {
    return await User.findById(userId).lean();
}

export const getAll = async function () {
    return await User.find({}).lean();
}