const express = require( 'express' ); 
const app = express();
const mongoose = require("mongoose"); 
const port = process.env.PORT|| 3000 ; 
const userRoutes = require( './routes/user-routes' ); 
const bodyParser = require ( 'body-parser' ) 
const session = require( 'express-session' ); 
const passport = require ( './middlewares/passport-config' ); 
const flash = require ( 'express-flash' ); 
const User = require('./models/users-model');

var db=mongoose.connection;

require('dotenv').config()

function setupApp (){ 

	app.set('views', __dirname + '/public/views');
    app.set('view-engine', 'ejs');
	app.use(bodyParser.json());
	app.use( bodyParser.urlencoded( { extended: false } ) );
	app.use('/public', express.static('public'));
	const sessionConfig = { secret:  process.env.SESSION_SECRET , resave: false , saveUninitialized: true }; 
 	app.use ( session( sessionConfig ) ); 
 	app.use ( flash () ); 
 	app.use ( passport.initialize () ); 
	app.use ( passport.session () ); 
	app.use( '/' , userRoutes ); 
} 

setupApp (); 

app.listen (port , () => console.log(`listening on... ${ port } `) ); 