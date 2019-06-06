//Assign values for requires
const express = require("express");
const router = express.Router();
const helpers = require('../helpers/todos');

router.route('/')
    .get(helpers.gettodos)
    .post(helpers.posttodos)


router.route('/:todoId')
    .get(helpers.getid)
    .put(helpers.putid)
    .delete(helpers.deleteid)


//GET route to list all
//router.get("/", );

//POST route to create
//router.post("/", );

//GET route for specific id
//router.get("/:todoId", );

//PUT route for specific id
//router.put("/:todoId", );

//DELETE route for specific id
//router.delete("/:todoId", );

//Export to be accesssed
module.exports = router;
