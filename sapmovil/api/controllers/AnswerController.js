/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	respAnswer: function (req, res) {

		var userId = req.allParams().id;
		var respuesta = req.allParams().answer;
		var questionNumber = req.allParams().questionNumber;

		console.log("RESPUESTA  A PREGUNTA");
		console.log(userId);
		console.log(respuesta);
		User.findOne({id:userId}).exec(function (err,user){

	    	  console.log(user);

	          Question.findOneByNumberQuestion(questionNumber,function(err,preg){
	                if(err)throw err;
	                var resp = {};
	                console.log("pregunta Actual"); 
	                console.log(preg);
	                resp.answer = respuesta;
	                resp.question = preg;
	                resp.user = user;
	                resp.answerContest = true;
	                Answer.create(resp,function(err,data){
	                    if(err){console.log(err);return res.json(err)}
	                    user.answerActual = data;
	                    user.answers.push(data);
	                    user.save();
	                    res.json(resp);
	                })

	            });
	    });

	}



	
};

