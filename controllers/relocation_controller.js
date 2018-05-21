var express = require("express");

var router = express.Router();

// Import the model (relocation.js) to use its database functions.
var relocation = require("../models/relocation.js");

// Create all our routes and set up logic within those routes where required.

// Export routes for server.js to use.
module.exports = router;