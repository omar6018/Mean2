const mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.IPDB+':27017/todoApp', 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to database");
}).catch(error => {
    console.log("ubable to connect to database",error);
})