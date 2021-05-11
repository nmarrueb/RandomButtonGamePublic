const { Strategy } = require ( 'passport-local' ); 
const passport = require ( 'passport' ); 
const users = require ( '../models/users-model' ); 
const bcrypt = require ( 'bcrypt' ); 

async function authenticateUser ( email , password , done ){ 
	const user = await users.findOneuser( email ); 
	if ( user === null){ 
		console.log ( "No user with that email" ); 
		//console.log('user', user)
		return done (null, false,  { message: 'No user with that email' });
		
	} 

	if ( await bcrypt.compare ( password , user.password ) ){ 
		console.log ( "User Authenticated" ); 
		return done (null, user); 
	} 
	else { 
		console.log ( "Password incorrect" ); 
		return done (null, false,  { message: 'Password incorrect' }); 
	} 
} 
async function setupPassport (){ 
	const formNames = { usernameField: 'email' , passwordField: 'password' }; 
	const localStrategy = new Strategy ( formNames , authenticateUser ); 
	passport.use( localStrategy ); 
	passport.serializeUser( ( user , done ) => done (null, user.email ) ); 
 	passport.deserializeUser( async (id, done) => done ( null, await users.findOneuser( id)) );
} 
setupPassport (); 
module.exports = passport 