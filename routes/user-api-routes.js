var db = require("../models");
var eventful = require("eventful-node");
var client2 = new eventful.Client("ZRp8PtrTPMPHFLQN");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

   app.get("/api/eventful/:location", function(req,res){
    client2.searchEvents({ location: req.params.location }, function(err, data){
      if(err){
      
        return console.error(err);
      
      }
      // console.log(data);
      // console.log('Recieved ' + data.search.total_items + ' events');
      // console.log('Event listings:  ');
      // console.log(data.search.events.event)
      
      //print the title of each event
      res.json(data.search.events.event)
    });
  });
};

