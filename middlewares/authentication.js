import * as config from '../config/config';
import { verify } from 'jsonwebtoken';

function auth(req, res, next) {
    let token = req.cookies[config.default.cookie_name];

    if (token) {
        verify(token, config.default.secret, function (err, decoded){
            if (err) {
                res.clearCookie(config.default.cookie_name);
            }
            else {
                req.user = decoded;
                res.locals.user = decoded;
                res.locals.isAuth = true;
            }
        });
    }

    next();
};

export default auth;