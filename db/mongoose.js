const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shashank1998:root@cluster0-wbrol.mongodb.net/Blogs-Application',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('connection successful')
}).catch((e)=>{
    console.log('unable to connect',e)
})