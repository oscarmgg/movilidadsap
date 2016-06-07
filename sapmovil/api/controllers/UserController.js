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
	    
	},


	getDashboard : function(req,res){

	    UserService.getDashboard().then(function(data){


	    	    console.info("GET DASHBOARD",data)
	            var arrAnswer = {}
	            var sumresp = "";
	            var tiporesp11 = 0;
	            var tiporesp12 = 0;
	            var tiporesp13 = 0;
	            var tiporesp14 = 0;
	            var tiporesp15 = 0;

	            var tiporesp21 = 0;
	            var tiporesp22 = 0;
	            var tiporesp23 = 0;
	            var tiporesp24 = 0;
	            var tiporesp25 = 0;

	            var tiporesp31 = 0;
	            var tiporesp32 = 0;
	            var tiporesp33 = 0;
	            var tiporesp34 = 0;
	            var tiporesp35 = 0;

	            var tiporesp41 = 0;
	            var tiporesp42 = 0;
	            var tiporesp43 = 0;
	            var tiporesp44 = 0;
	            var tiporesp45 = 0;

	            var tiporesp51 = 0;
	            var tiporesp52 = 0;
	            var tiporesp53 = 0;
	            var tiporesp54 = 0;
	            var tiporesp55 = 0;



	            for(i=0; i<data.length; i++){

	            	if(data[i].numberQuestion == 1 && data[i].answer ==  1){
	            		sumresp = data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp11+=1 
	            		arrAnswer[sumresp] = tiporesp11;
	            	}

	            	if(data[i].numberQuestion == 1  && data[i].answer ==  2){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp12+=1 
	            		arrAnswer[sumresp] = tiporesp12;
	            	}

	            	if(data[i].numberQuestion == 1 && data[i].answer ==  3){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp13+=1 
	            		arrAnswer[sumresp] = tiporesp13;
	            	}

	            	if(data[i].numberQuestion == 1 && data[i].answer ==  4){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp14+=1 
	            		arrAnswer[sumresp] = tiporesp14;
	            	}

	            	if(data[i].numberQuestion == 1 && data[i].answer ==  5){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp15+=1 
	            		arrAnswer[sumresp] = tiporesp15;
	            	}



	            	if(data[i].numberQuestion == 2 && data[i].answer ==  1){
	            		sumresp = data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp21+=1 
	            		arrAnswer[sumresp] = tiporesp21;
	            	}

	            	if(data[i].numberQuestion == 2  && data[i].answer ==  2){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp22+=1 
	            		arrAnswer[sumresp] = tiporesp22;
	            	}

	            	if(data[i].numberQuestion == 2 && data[i].answer ==  3){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp23+=1 
	            		arrAnswer[sumresp] = tiporesp23;
	            	}

	            	if(data[i].numberQuestion == 2 && data[i].answer ==  4){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp24+=1 
	            		arrAnswer[sumresp] = tiporesp24;
	            	}

	            	if(data[i].numberQuestion == 2 && data[i].answer ==  5){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp25+=1 
	            		arrAnswer[sumresp] = tiporesp25;
	            	}



	            	if(data[i].numberQuestion == 3 && data[i].answer ==  1){
	            		sumresp = data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp31+=1 
	            		arrAnswer[sumresp] = tiporesp31;
	            	}

	            	if(data[i].numberQuestion == 3  && data[i].answer ==  2){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp32+=1 
	            		arrAnswer[sumresp] = tiporesp32;
	            	}

	            	if(data[i].numberQuestion == 3 && data[i].answer ==  3){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp33+=1 
	            		arrAnswer[sumresp] = tiporesp33;
	            	}

	            	if(data[i].numberQuestion == 3 && data[i].answer ==  4){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp34+=1 
	            		arrAnswer[sumresp] = tiporesp34;
	            	}

	            	if(data[i].numberQuestion == 3 && data[i].answer ==  5){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp35+=1 
	            		arrAnswer[sumresp] = tiporesp35;
	            	}



	            	if(data[i].numberQuestion == 4 && data[i].answer ==  1){
	            		sumresp = data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp41+=1 
	            		arrAnswer[sumresp] = tiporesp41;
	            	}

	            	if(data[i].numberQuestion == 4  && data[i].answer ==  2){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp42+=1 
	            		arrAnswer[sumresp] = tiporesp42;
	            	}

	            	if(data[i].numberQuestion == 4 && data[i].answer ==  3){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp43+=1 
	            		arrAnswer[sumresp] = tiporesp43;
	            	}

	            	if(data[i].numberQuestion == 4 && data[i].answer ==  4){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp44+=1 
	            		arrAnswer[sumresp] = tiporesp44;
	            	}

	            	if(data[i].numberQuestion == 4 && data[i].answer ==  5){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp45+=1 
	            		arrAnswer[sumresp] = tiporesp45;
	            	}


	            	if(data[i].numberQuestion == 5 && data[i].answer ==  1){
	            		sumresp = data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp51+=1 
	            		arrAnswer[sumresp] = tiporesp51;
	            	}

	            	if(data[i].numberQuestion == 5  && data[i].answer ==  2){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp52+=1 
	            		arrAnswer[sumresp] = tiporesp52;
	            	}

	            	if(data[i].numberQuestion == 5 && data[i].answer ==  3){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp53+=1 
	            		arrAnswer[sumresp] = tiporesp53;
	            	}

	            	if(data[i].numberQuestion == 5 && data[i].answer ==  4){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp54+=1 
	            		arrAnswer[sumresp] = tiporesp54;
	            	}

	            	if(data[i].numberQuestion == 5 && data[i].answer ==  5){
	            		sumresp =data[i].numberQuestion + " " + data[i].answer;
	            		tiporesp55+=1 
	            		arrAnswer[sumresp] = tiporesp55;
	            	}

	            }

	      res.json(arrAnswer);
	    }).catch(function(err){
	      console.log(err);
	      res.json(400,err);
	    })
	    
	}

	
};

