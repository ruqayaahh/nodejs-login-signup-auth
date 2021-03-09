const express = require("express");
const logger = require("morgan");
const { userRouter } = require("/.routes");
const app =  express();

app.use(express.json());
app.use(logger("dev")); //not clear what it does

app.get("/", (req, res) => {
   res.json({
       welcome: "Hello"
   });
});

app.use(userRouter);

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
});