const express = require('express');
const connectDB = require('./common/db/mongoose')
const userRoute = require("./app/users/user.route");
const noteRouter = require("./app/notes/note.route");

const app = express();
connectDB()

app.use(express.json());



app.use('/users', userRoute);
app.use('/notes', noteRouter);





app.use((err, req, res, next)=>{
    res.json({message: err.message,status:500,stack:err.stack});
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})