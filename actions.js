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
  }
}
var FETCH_EMAIL_SUCCESS = 'FETCH_EMAIL_SUCCESS';
var fetchEmailSuccess = function(repository, email) {
    return {
        type: FETCH_EMAIL_SUCCESS,
        description: email
    };
};

var FETCH_EMAIL_ERROR= 'FETCH_EMAIL_ERROR';
var fetchEmailError = function(repository, error) {
    return {
        type: FETCH_EMAIL_ERROR,
        repository: repository,
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
