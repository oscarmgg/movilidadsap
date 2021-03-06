/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	username: {
  		type: 'string',
  		required: true
  	},
    company: {
      type: 'string'
    },
  	name: {
  		type: 'string'
  	},
  	phonemovil: {
  		type: 'string',
  		unique: true,
  		minLength: 10
  	},
  	questionSend:'integer',
  	answerActual:{model:'answer'},
  	answers: {
  		collection: 'answer',
  		via: 'user'
  	},
  	rol: 'string'

  }
};

