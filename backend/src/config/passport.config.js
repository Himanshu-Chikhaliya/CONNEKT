const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const { JWT_KEY } = require("./env.config");
const User = mongoose.model("users");
const passport = require("passport");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY,
}


const passportStrategy = new JwtStrategy(opts, async (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) 
          return done(null, user);
        return done(null, false);
      })
      .catch(err => console.log(err));
})


module.exports.passportStrategy = passportStrategy;

