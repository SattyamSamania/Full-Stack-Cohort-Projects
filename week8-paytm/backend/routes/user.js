
const zod = require('zod');
const express = require('express');
const User = require('../model/userModel');

const routeRouter = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),    
    lastname: zod.string(),
    password: zod.string().min(6),

})


// Route for Signup 

routeRouter.post('/signup', async (req, res)=> {
    const {success } = signupBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({error: "Invalid data"});
    }

    const existingUser  = await User.findOne({
        username: req.body.username
    });

    if(existingUser){
        return res.status(400).json({error: "User already exists"});
    }


    const newUser = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    });

    const userId = User._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})



// Route for Login

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),

})

routeRouter.post('/signin', async (req, res) => {

    const {success} = signinBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({error: "Invalid data"});
    }

    const existingUser2 = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (existingUser2) {
        const token = jwt.sign({
            userId: User._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = routeRouter;