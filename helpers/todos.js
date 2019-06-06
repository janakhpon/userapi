//Assign database for helper functions
const db = require("../models");

//GET route to list all 
exports.gettodos = function(req, res) {
  db.Todo.find()
    .then(function(todos) {
      res.json(todos);
    })
    .catch(function(err) {
      res.send(err);
    });
}

//POST rout to create
exports.posttodos = function(req, res) {
  db.Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
};


//GET specific id
exports.getid = function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundId) {
      res.json(foundId);
    })
    .catch(function(err) {
      res.send(err);
    });
};


//PUT route to update
exports.putid = function(req, res) {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(function(todo) {
      res.json(todo);
    })
    .catch(function(err) {
      res.send(err);
    });
};



//DELETE route for specific id
exports.deleteid = function(req, res) {
  db.Todo.remove({ _id: req.params.todoId })
    .then(function(todo) {
      res.json("Deleted!");
    })
    .catch(function(err) {
      res.send(err);
    });
};


//exports to be accessed
module.exports = exports;
