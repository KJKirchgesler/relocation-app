//import bcrypt which we need to secure passwords
var bCrypt = require('bcrypt-nodejs');

//Initialize the passport-local strategy, and the user model
module.exports = function(passport, user) {
 
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
 


//Define our custom strategy with our instance of the LocalStrategy
passport.use('signonform', new LocalStrategy(
 
    {
        unameInput: 'userName',
        emailInput: 'email',
        pswdInput: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
    
    //Handling storing a user's details.
    function(req, email, password, done) {
 			
 			//adding our hashed password generating function inside the callback function
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
 User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            email: email,
 
                            password: userPassword,
 
                            username: req.body.username

 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
 
        }
 
    ));
 
}
