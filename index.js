const express = require('express');

require('./db/mongoose')
const userRouter = require('./routes/user.routes');
const User = require('./models/users.models');
const blogRouter =require('./routes/blogs.routes')
const commentRouter =require('./routes/comments.routes')
const app = express();
const port = process.env.PORT||3000;



app.use(express.json());
app.use(userRouter);
app.use(blogRouter);
app.use(commentRouter)

app.get('', (req, res) => {
    res.send("working");
});




app.listen(port, () => {
    console.log('server is running on port :' + port);
});