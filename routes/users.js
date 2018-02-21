const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register
router.post('/register', function(req,res,next){
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, function(err,user){
        if(err){
            res.json({success:false,msg:'Failed to register user'});
        }
        else {
            res.json({success:true,msg:'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', function(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,function(err,user){
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'Failed to authenticatre user'});
        }
        else {
            User.comparePassword(password, user.password, function (err, isMatched) {
                if (err) throw err;
                if (isMatched) {
                    const token = jwt.sign({data: user}, config.secret, {
                        expiresIn: 360000
                    });
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    });
                }
                else {
                    return res.json({success: false, msg: 'Wrong password'});
                }
            });
        }
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}), function(req,res,next){
    res.json({user: req.user});
});


module.exports = router;