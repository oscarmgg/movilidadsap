
var Q = require('q');

module.exports = {

	findQuestion:function(){

		var deferred = Q.defer();
			Question.find().then(function(question){
	            console.info("FIND QUESTION",question)
	            return deferred.resolve(question);
	        }).catch(function(err){
	            console.error("QuestionService","find Question",err)
	            return deferred.reject(err)
	        });
    	return deferred.promise;
	}

}