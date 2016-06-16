var actions = require('./actions');
var initialState = {email: ''};
var update = require('react-addons-update');

var emailReducer = function(state, action){
  state = state || initialState;
  if (action.type === actions.ADD_EMAIL) {
var newState = update(state, {email: {$set: action.email}});
  return newState
    };
  return state;
};

exports.emailReducer = emailReducer;

//var actions = actions
//var store = rewuire store
//store.dispatch
