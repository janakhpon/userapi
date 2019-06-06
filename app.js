//Assigning values for API
const express = require("express");
      app = express(),
      ejsLayouts = require("express-ejs-layouts"),
      bodyParser = require("body-parser"),
      userRouter = require('./routes/users'),
      port = process.env.PORT || 8080;
   

//Allow Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//responding route
app.get("/", (req, res) => {
  res.render('index');
});


//give access to router
app.use('/api/users', userRouter);



//Assign Server port to run
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
