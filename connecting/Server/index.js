const express = require('express');
const app = express();
const cors = require("cors");
const blogs = require("./routes/blog");
const users = require("./routes/user");
const posts = require("./routes/post");

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use("/blog", blogs)
app.use("/user", users)
app.use("/post", posts)



app.listen(PORT, ()=>{
    console.log(`running at ${PORT}`);
})