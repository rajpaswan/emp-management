const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_COLLECTION = process.env.DB_COLLECTION;

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`;
const OPTIONS = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectInterval: 5000,
    reconnectTries: 60,
    connectTimeoutMS: 10000
};

mongoose.connection.on('connected', function () {
    console.log('[db] connected to', MONGO_URL);
});

mongoose.connection.on('error', function (err) {
    console.log('[db] could not connect to', MONGO_URL);
});

mongoose.connection.on('disconnected', function () {
    console.log('[db] disconnected to', MONGO_URL);
});

setTimeout(() => {
    mongoose.connect(MONGO_URL, OPTIONS);
}, 10000);