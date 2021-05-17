const password = require('passport');
const local = require('./localStrategy');
const USer = require('../models/user');
const passport = require('passport');
const { User } = require('../models');

module.exports = () =>  {
    passport.serializeUser((user,done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done ) => {
        User.findOne({where : {id}})
        .then(user => done(null, user))
        .catch(err => done(err));
    });
    local();
}