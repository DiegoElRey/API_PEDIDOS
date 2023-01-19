const mongoose = require('mongoose');

const {CARVAJAL_BACKEND_MONGODB_HOST, CARVAJAL_BACKEND_MONGODB_DATABASE} = process.env
const MONGODB_URI = `mongodb://${CARVAJAL_BACKEND_MONGODB_HOST}/${CARVAJAL_BACKEND_MONGODB_DATABASE}`;

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI).then(db => console.log('Database is connected'))
        .catch(err => console.log(err))