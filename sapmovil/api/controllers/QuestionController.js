/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	/*getQuestion: function (req, res) {
		var userId = req.allParams().id;
		var questionNumber = req.allParams().questionNumber;
        User.findOne({id:userId},function(err,user){
            if(err)console.log( err);
            console.log("USER");
            console.log(user);
            Question.findOneByNumberQuestion(questionNumber,function(err,preg){
                if(err)throw err;
                console.log("PREGUNTA");
                console.log(preg);
                res.json(preg);
            });    
            
        });
       
    }*/


    getQuestion : function(req,res){

        QuestionService.findQuestion().then(function(data){
          res.json(data);
        }).catch(function(err){
          console.log(err);
          res.json(400,err);
        })
        
    }


	
};

