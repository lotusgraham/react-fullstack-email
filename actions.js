require('isomorphic-fetch');

var fetchDescription = function(repository) {
    return function(dispatch) {
        var url = 'https://api.github.com/repos/' + repository;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchDescriptionSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(repository, error)
            );
        });
    }
};


var ADD_EMAIL = 'ADD_EMAIL';
var addEmail = function(email) {
  return{
    type: ADD_EMAIL,
    email: email
  };
};

var REALTIME_UPDATE = 'REALTIME_UPDATE';
var realtimeUpdate = function(email) {
  return {
    type: REALTIME_UPDATE,
    email: email
  };
};

var FETCH_EMAIL_SUCCESS = 'FETCH_EMAIL_SUCCESS';
var fetchEmailSuccess = function(email) {
    return {
        type: FETCH_EMAIL_SUCCESS,
        description: email
    };
};

var FETCH_EMAIL_ERROR= 'FETCH_EMAIL_ERROR';
var fetchEmailError = function(email, error) {
    return {
        type: FETCH_EMAIL_ERROR,
        email: email,
        error: error
    };
};

exports.FETCH_EMAIL_SUCCESS = FETCH_EMAIL_SUCCESS;
exports.fetchEmailSuccess = fetchEmailSuccess;
exports.FETCH_EMAIL_ERROR = FETCH_EMAIL_ERROR;
exports.fetchEmailError = fetchEmailError;
// var action = addEmail('gwhitley99@gmail.com')
exports.ADD_EMAIL = ADD_EMAIL;
exports.addEmail = addEmail;
exports.REALTIME_UPDATE = 'REALTIME_UPDATE';
exports.realtimeUpdate = realtimeUpdate;

exports.fetchDescription = fetchDescription;
