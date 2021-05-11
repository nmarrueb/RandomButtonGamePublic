const shortid = require ( 'shortid' );
const bcrypt = require ( 'bcrypt' );  
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
class Users { 
	constructor(){ 
		this.users = [];


	} 
	async add ( name , email , password){ 
		let status = false;
		  mongoose.connect(process.env.mongo)
		    .then(connection => {
		        console.log('Connected to MongoDB')
		    })
		    .catch(error => {
		      console.log(error.message)
		     })
	   // const uri = { secret: process.env.mongo, resave: false , saveUninitialized: true };
	    this.client = new MongoClient(process.env.mongo, { useNewUrlParser: true, useUnifiedTopology: true }); 
		const id = shortid . generate (); 
		console.log('password', password);
		const hashedPassword = await bcrypt.hash ( password , 10 );
		const user = { id:id , name:name , email:email , password:hashedPassword, gameHistory:[] }; 

	    try {

	        await this.client.connect();
	        const existingemail= await this.client.db("usersinfo").collection("register").findOne({ email: email});
		    if (existingemail){
				console.log("user exists");
				status = false;			
				
			}
			else{
				this.users.push ( user ); 
				console.log (this. users ) 
				console.log("Connected to DB !!")
				const result = await this.client.db("usersinfo").collection("register").insertOne(user);
				status = true;
			}     
	
	    } 
	    catch (e) {
	        console.error(e);
	    } 
	    finally {
	        await this.client.close();
	    }
		return status;

	}      
	 

	async findOneuser( username) {
		console.log('beginning of findOneUser');
		mongoose.connect(process.env.mongo)
		    .then(connection => {
		        console.log('Connected to MongoDB')
		    })
		    .catch(error => {
		      console.log(error.message)
		     })
		//const uri = { secret: process.env.mongo, resave: false , saveUninitialized: true };
		//console.log('creating a new mongo client');
	    this.client = new MongoClient(process.env.mongo, { useNewUrlParser: true, useUnifiedTopology: true }); 
		let  user = null;
		//console.log('before try block');
	    try {

	        await this.client.connect();
			//console.log('before find');
	        user = await this.client.db("usersinfo").collection("register").findOne({ email: username });
			//console.log('after find', user);

	    } 
	    catch (e) {
	        console.error(e);
	    } 
	    finally {
	        await this.client.close();
	    }
		return user;
	} 
		




} 

module.exports = new Users (); 