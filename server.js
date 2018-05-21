var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();

//adding dependencies for authentication middleware
var passport   = require('passport')
var session    = require('express-session')
var env = require('dotenv').load()

// Requiring our models for syncing
var db = require("./models/index");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public/assets"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Set Handlebars. 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/relocation_controller.js");

// app.use(routes);

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
var authRoute = require('./routes/auth.js')(app);

//load passport strategies
//==================================================================
require('./config/passport/passport.js')(passport, db.user);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});