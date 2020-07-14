const mongoose = require('mongoose');

const URI = "mongodb://localhost/mern-stack"

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('--> Database is connect')
).catch(error => console.log(error))

