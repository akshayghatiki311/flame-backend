const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

// App Config
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://flame_admin:1NigSyamVrDqtYi4@cluster0.efsmz6r.mongodb.net/?retryWrites=true&w=majority';

// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>{
    console.log(err);
});

// API Endpoints
app.use('/',router);
// Listener
app.listen(port,()=>console.log(`listening on port: ${port}`));
