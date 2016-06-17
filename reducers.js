var actions = require('./actions');
var initialState = {email: ''};
var update = require('react-addons-update');

var emailReducer = function(state, action){
  state = state || initialState;
  if (action.type === actions.ADD_EMAIL) {
    console.log('emailAdded');
var newState = update(state, {email: {$set: action.email}});
  return newState
    }
  if (action.type === actions.REALTIME_UPDATE) {
    var newState = update(state, {email: {$set: action.email}});
    console.log('character entered');
  return newState
  };

    // 2 if action.type = actions.UPDATE_EMAIL
    // take that action and update() the state
  return state;
};

exports.emailReducer = emailReducer;

//var actions = actions
//var store = rewuire store
//store.dispatch
