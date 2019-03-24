const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs");

const UserSchema = mongoose.Schema({
  firstName: {type:String, required: true},
  lastName: {type:String, required: true},
  username: {type:String, required: true},
  email: {type:String, required: true},
  password: {type:String}
})

UserSchema.pre("save", function(next) {
	var user = this
	if (!user.isModified("password")) return next()
	bcrypt.genSalt(5, (err, salt) => {
		if (err) return next(err)
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if (err) return next(err)
			user.password = hash
			next()
		})
	})
})

/*
 Defining our own custom document instance method
 */
 UserSchema.methods = {
 	comparePassword: function(candidatePassword, cb) {
 		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
 			if (err) return cb(err)
 			cb(null, isMatch)
 		})
 	}
 }

/**
* Statics
*/
UserSchema.statics = {}

mongoose.model('User', UserSchema);