const users = require ( '../models/users-model' ); 
const passport = require ( '../middlewares/passport-config' ); 

class UserControllers { 
	getIndex ( request , response ){ 
		console.log ( request.session.id ); 
		response.render ( 'index.ejs',  { name: request.user.name } ); 
	} 
	getLogin ( request , response ){ 
		console.log ( request.session.id );
		response.render ( 'login.ejs' ); 
	}
	getRegister ( request , response ){ 
		console.log ( request.session.id );
 		response.render ( 'register.ejs' ); 
	} 

	getGamePage(request, response){
		console.log ( request.session.id );
 		response.render ( 'gamePage.ejs' );
	}
	getGallery(request, response){
		console.log ( request.session.id );
 		response.render ( 'gallery.ejs' );
	}

	getIndexGame(request, response){
		console.log ( request.session.id );
 		response.render ( 'index.ejs' );
	}
	getAccount(request , response){
		console.log ( request.session.id );
 		response.render ( 'myaccount.ejs' ); 
	}
	getRetry ( request , response ){ 
		console.log ( request.session.id );
 		response.render ( 'retry.ejs' ); 
	} 

	postLogin ( request , response , next ){ 
		const config = {}; 
		config.successRedirect = '/' ; 
		config.failureRedirect = '/login' ; 
		config.failureFlash = true;
		const authHandler = passport.authenticate ( 'local' , config ); 
		authHandler ( request , response , next ); 
	} 
	async postRegister ( request , response){ 
			const { name , email , password } = request . body ; 
			console.log('post register, before add');
			const success = await users.add ( name , email , password ); 
			console.log('success', success)
			if (!success){
				response.redirect ( '/retry');
				 
			}
			response.redirect ( '/login' ); 

	} 
	postRetry ( request , response){ 
		try { 
			const { name , email , password } = request . body ; 
			users.add ( name , email , password ); 
			response.redirect ( '/login' ); 
		} 
		catch { 
			response.redirect ( '/retry');

		} 

	}
	postLogout ( request , response ){ 
		request . logOut (); 
		response . redirect ( 'login' ); 
	}
	postAccount(request , response){
		response.redirect('myaccount')
	}

} 
module.exports = new UserControllers(); 
