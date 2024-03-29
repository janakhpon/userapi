//Assigning values for API
const express = require("express");
app = express(),
      path = require("path"),
      ejsLayouts = require("express-ejs-layouts"),
      bodyParser = require("body-parser"),
      userRouter = require('./routes/users'),
      port = process.env.PORT || 8080;
   

//Allow Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
//Allow XHttp request 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  next();
});

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
