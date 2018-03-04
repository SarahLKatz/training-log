const passport = require('passport');
const express = require('express');
const app = express();
var StravaStrategy = require('passport-strava-oauth2').Strategy;
module.exports = app;

if (!process.env.STRAVA_CLIENT_ID || !process.env.STRAVA_CLIENT_SECRET) {

  console.log('Strava client ID / secret not found. Skipping Strava OAuth.')

} else {

  const stravaConfig = {
    clientID: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_CLIENT_SECRET,
    callbackURL: process.env.STRAVA_CALLBACK
  }

  const strategy = new StravaStrategy(stravaConfig, (token, refreshToken, profile, done) => {
    const stravaId = profile.id
    const name = profile.displayName
  })

  passport.use(strategy);

  app.get('/auth', passport.authenticate('strava'))

  app.get('/auth/callback', passport.authenticate('strava', { failureRedirect: '/' }),
    function(req, res) {
      console.log('here i am')
      // Successful authentication, redirect home.
      res.send({userId: stravaId})
  });

  app.get('auth/callback', passport.authenticate('strava', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }))

}

app.listen(3001, (res,req,next) => {
  console.log('server is listening')
})

// https://www.strava.com/oauth/authorize?client_id=${clientID}&response_type=code&redirect_uri=${callbackURL}

