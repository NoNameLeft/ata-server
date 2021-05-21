import { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';

import auth from '../middlewares/authentication';

export default function (app) {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    
    app.use(cookieParser());
    app.use(auth);
}