/*
 Configuring local strategy to authenticate strategies
 Code modified from : https://github.com/madhums/node-express-mongoose-demo/blob/master/config/passport/local.js
 */
const mongoose = require('mongoose');
const {Strategy} = require('passport-local');
const User = mongoose.model('User')

/*
By default, LocalStrategy expects to find credentials in parameters named username and password.
If your site prefers to name these fields differently, options are available to change the defaults.
*/
module.exports = new Strategy({
    usernameField: "username"
}, (username, password, done) => { 	
    User.findOne({username}, (err, user) => {
        if(!user) return done(null, false, { message: `Username ${username} not found` })
        user.comparePassword(password, (err, isMatch) => {
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Invalid username or password" })
            }

        })
    })
})