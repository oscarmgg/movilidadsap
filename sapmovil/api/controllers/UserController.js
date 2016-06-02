/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	create : function(req,res){

	    var user = req.allParams();
	    UserService.createUser(user).then(function(data){
	      res.json(data);
	    }).catch(function(err){
	      console.log(err);
	      res.json(400,err);
	    })
	    
	}
	
};

