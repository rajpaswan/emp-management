const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_COLLECTION = process.env.DB_COLLECTION;

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
}, function (err) {
    if (err)
        console.log('[db]', err);
    else
        console.log('[db] connected to', MONGO_URL);
});