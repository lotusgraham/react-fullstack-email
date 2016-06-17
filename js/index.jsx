var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../store');
// var AddEmail = require('./actions').addEmail;
var Provider = require('react-redux').Provider;
var EmailForm = require('./EmailForm');



// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Email />, document.getElementById('app'));
// });

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <EmailForm />
        </Provider>,
        document.getElementById('app')
    );
});


// module.exports = Container;
