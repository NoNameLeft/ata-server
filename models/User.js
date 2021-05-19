import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as config from '../config/config';

const ENGLISH_ALPHANUMERIC_PATTERN = new RegExp('^[a-zA-Z0-9]+$');
const VALID_EMAIL_PATTERN = new RegExp('^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

const userScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        validate: {
            validator: (value) => {
                return ENGLISH_ALPHANUMERIC_PATTERN.test(value)
            },
            message: (props) =>
                `${props.value} is invalid username. Username should consist only english letters and digits!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return VALID_EMAIL_PATTERN.test(value);
            },
            message: (props) => 
                `${props.value} is invalid email address!`
        }
    }
});

userScheme.pre('save', function (next) {
    bcrypt.genSalt(config.default.saltRounds)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});

export default mongoose.model('User', userScheme);