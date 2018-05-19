// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/home.html"));
  });

  // home route loads home.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/home.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/blog.html"));
  });

  // profile route loads profile.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/profile.html"));
  });
  // results route loads results.html
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/results.html"));
  });
  // results route loads registration.html
  app.get("/registration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/registration.html"));
  });
};