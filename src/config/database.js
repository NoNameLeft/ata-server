import mongoose from 'mongoose';

import * as config from './config';

const dbConnectionString = config.default.dbUrl;
const dbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

mongoose.connect(dbConnectionString, dbConnectionOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function () {
    console.log("DB is connected");
});

module.exports = db;