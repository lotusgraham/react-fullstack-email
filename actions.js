var ADD_EMAIL = 'ADD_EMAIL';
var addEmail = function(email) {
  return{
    type: ADD_EMAIL,
    email: email
  };
};

// var action = addEmail('gwhitley99@gmail.com')
exports.ADD_EMAIL = ADD_EMAIL;
exports.addEmail = addEmail;
