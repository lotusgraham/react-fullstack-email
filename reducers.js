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
else if (action.type === actions.REALTIME_UPDATE) {
    var newState = update(state, {email: {$set: action.email}});
    console.log('character entered');
  return newState
  }
else if (action.type === actions.FETCH_EMAIL_SUCCESS) {
    // Find the index of the matching repository
    var index = -1;
    for (var i=0; i<state.length; i++) {
        var email = state;
        if (repository.name === action.repository) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        throw new Error('Could not find repository');
    }

    var before = state.slice(0, i);
    var after = state.slice(i + 1);
    var newRepository = Object.assign({}, repository, {
        description: action.description
    });
    return before.concat(newRepository, after);
}
else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
    // Find the index of the matching repository
    var index = -1;
    for (var i=0; i<state.length; i++) {
        var repository = state[i];
        if (repository.name === action.repository) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        throw new Error('Could not find repository');
    }

    var before = state.slice(0, i);
    var after = state.slice(i + 1);
    var newRepository = Object.assign({}, repository, {
        description: 'N/A'
    });
    return before.concat(newRepository, after);
};

    // 2 if action.type = actions.UPDATE_EMAIL
    // take that action and update() the state
  return state;
};

exports.emailReducer = emailReducer;

//var actions = actions
//var store = rewuire store
//store.dispatch
