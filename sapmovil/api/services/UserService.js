
var Q = require('q');

module.exports = {

	createUser:function(user){

		var deferred = Q.defer();
			User.create(user).then(function(user){
	            console.info("CREATED USER",user)
	            return deferred.resolve(user);
	        }).catch(function(err){
	            console.error("UserService","createUser",err)
	            return deferred.reject(err)
	        });
    	return deferred.promise;
	},


	getDashboard:function(){

		var deferred = Q.defer();
			Answer.find().then(function(user){
	            console.info("GET DASHBOARD",user)
	            return deferred.resolve(user);
	        }).catch(function(err){
	            console.error("UserService","getDashboard",err)
	            return deferred.reject(err)
	        });
    	return deferred.promise;
	}



}