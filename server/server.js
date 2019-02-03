const config = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');

// setup app server
const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

// setup middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('[app] :method :url :status - :response-time ms'));

// setup routes
app.use(express.static('../client/dist'));
//app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// start app server
app.listen(APP_PORT, () => {
    console.log('[app]', `server running at http://localhost:${APP_PORT}`);
})