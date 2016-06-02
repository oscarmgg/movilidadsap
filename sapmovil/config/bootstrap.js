/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

	// * * * * * PREGUNTAS * * * * //
	Question.findOneByNumberQuestion(1).then(function (data){
        if(!data) 
            Question.create({numberQuestion:1,
                             textQuestion:"¿Pregunta 1?",
                             textQuestionCont:{
                                1:"respuesta1",
                                2:"respuesta2",
                                3:"respuesta3",
                                4:"respuesta4"
                             }
                            })
            .then(function (data){
                console.log("CREATING QUESTION 1>>>"+JSON.stringify(data));
            }).catch(function(err){
	            console.error("createQuestion","createQuestion",err);
	        }); 
    }).catch(function(err){
        console.error("getQuestion","getQuestion",err);
	}); 

	Question.findOneByNumberQuestion(2).then(function (data){
        if(!data) 
            Question.create({numberQuestion:2,
                             textQuestion:"¿Pregunta 2?",
                             textQuestionCont:{
                                1:"respuesta1",
                                2:"respuesta2",
                                3:"respuesta3",
                                4:"respuesta4"
                             }
                            })
            .then(function (data){
                console.log("CREATING QUESTION 2>>>"+JSON.stringify(data));
            }).catch(function(err){
	            console.error("createQuestion","createQuestion",err);
	        }); 
    }).catch(function(err){
        console.error("getQuestion","getQuestion",err);
	}); 


	Question.findOneByNumberQuestion(3).then(function (data){
        if(!data) 
            Question.create({numberQuestion:3,
                             textQuestion:"¿Pregunta 3?",
                             textQuestionCont:{
                                1:"respuesta1",
                                2:"respuesta2",
                                3:"respuesta3",
                                4:"respuesta4"
                             }
                            })
            .then(function (data){
                console.log("CREATING QUESTION 3>>>"+JSON.stringify(data));
            }).catch(function(err){
	            console.error("createQuestion","createQuestion",err);
	        }); 
    }).catch(function(err){
        console.error("getQuestion","getQuestion",err);
	}); 


	// * * * * * USUARIOS ADMINISTRADORES * * * * //
    User.findOneByUsername('oscar.monroyg@gmail.com').then(function(data){
        if(!data)
            User.create({username:'oscar.monroyg@gmail.com', name:'Oscar Monroy Garcia', phonemovil: '5522436992',rol:'ADMIN'})
            .then(function (data){
                console.log("CREATING USER ADMIN>>>"+JSON.stringify(data)) 
            }).catch(function(err){
	            console.error("createUser","createUser",err);
	        });   
    }).catch(function(err){
	            console.error("getUser","createUser",err);
	});


/*
	User.findOneByUsername('israel.ramirez@gmail.com').then(function(data){
        if(!data)
            User.create({username:'israel.ramirez@gmail.com', name:'Israel Ramirez Garcia', phonemovil: '5522436991',rol:'USER', questionSend: 2})
            .then(function (data){
                console.log("CREATING USER>>>"+JSON.stringify(data)) 
            }).catch(function(err){
	            console.error("createUser","createUser",err);
	        });   
    }).catch(function(err){
	            console.error("getUser","createUser",err);
	});
*/


/*
    User.findOne({id:"574cd29fd3ba4ed028334d83"}).exec(function (err,user){

    	  console.log(user);

          Question.findOneByNumberQuestion(3,function(err,preg){
                if(err)throw err;
                var resp = {};
                console.log("pregunta Actual"); 
                console.log(preg);
                resp.answer = 2;
                resp.question = preg;
                resp.user = user;
                Answer.create(resp,function(err,data){
                    if(err){console.log(err);}
                    user.answerActual = data;
                    user.answers.push(data);
                    user.save();
                })

            });
    });


  */

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
