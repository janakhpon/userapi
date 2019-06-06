//Assigning values for API
const express = require("express");
      app = express(),
      bodyParser = require("body-parser"),
      todoRouter = require('./routes/todos'),
      port = process.env.PORT || 8080;
   

//Allow Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//responding route
app.get("/", (req, res) => {
    res.json({ message: "reply from app" });
});


//give access to router
app.use('/api/todos', todoRouter);



//Assign Server port to run
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
