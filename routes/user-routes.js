var express = require( 'express' ); 
var router = express.Router(); 
const controller = require( '../controllers/user-controllers' ); 
const { checkAuthenticated, checkNotAuthenticated } = require ( '../middlewares/auth' ); 

router.get( '/' , checkAuthenticated, controller.getIndex ); 
router.get('/index' , checkNotAuthenticated, controller.getIndexGame);
router.get ( '/login' , checkNotAuthenticated, controller.getLogin ); 
router.get ( '/register' , checkNotAuthenticated,  controller.getRegister ); 
router.get ( '/myaccount' , checkNotAuthenticated,  controller.getAccount );
router.get('/gamePage' , checkNotAuthenticated, controller.getGamePage );
router.get('/gallery' , checkNotAuthenticated, controller.getGallery );
router.get ( '/retry' , checkNotAuthenticated,  controller.getRetry );
router.post ( '/login' , checkNotAuthenticated, controller.postLogin ); 
router.post ( '/register' , checkNotAuthenticated, controller.postRegister );
router.post ( '/retry' , checkNotAuthenticated, controller.postRetry );
router.post ( '/logout' , checkAuthenticated , controller . postLogout ); 


module.exports = router;
