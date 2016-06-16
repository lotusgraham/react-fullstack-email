var React = require('react');
var ReactDOM = require('react-dom');
// var store = require('./store');
// var AddEmail = require('./actions').addEmail;
// var Provider = require('react-redux').Provider;
// var connect = require('react-redux').connect;
var EmailForm = require('./EmailForm');


// var mapStateToProps = function(state, props) {
//     return {
//         email: state
//     };
// };
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Email />, document.getElementById('app'));
// });

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        // <Provider store={store}>
            <EmailForm />,
        //{/*</Provider>,*/}
        document.getElementById('app')
    );
});
//
// var Container = connect(mapStateToProps)(EmailForm);
//
// module.exports = Container;
