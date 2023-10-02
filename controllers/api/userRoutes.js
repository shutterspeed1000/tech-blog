
const router = require('express').Router();
const { Users } = require('../../models');

// login route


// create user route
router.post('/', async(req, res)=> {
    try{

        const newUser =  await Users.create(req.body);

        res.json(newUser)

    }catch(err){
        res.status(500).json(err)
    }
})

// logout route


module.exports =  router