var React = require('react');
// var ReactDOM = require('react-dom');
// var redux = require('react-redux');
var connect = require('react-redux').connect;
var actions = require('../actions');

var EmailForm = React.createClass({
   getInitialState: function() {
      return {value: ''};
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
      var eachCharacter = this.state.value;
      this.props.dispatch(actions.realtimeUpdate(eachCharacter));
      // 3 .dispatch() action that the Email has changed and what it's changed to
   },
   handleClick: function() {
      var emailAddress = this.state.value;
      this.props.dispatch(actions.addEmail(emailAddress));
   },
    render:function(){
   return (
      <div className="stuff">
            <div className="row">
              <form className="col s12">
               <div className="row">
                   <div className="input-field col s2 offset-s5 ">
                     <input idName="email"
                            type="email"
                            class="validate"
                            onChange={this.handleChange}
                            value={this.state.value} />
                     <label forName="email">Email</label>
                     <a onClick={this.handleClick}
                         id="button"
                         className="waves-effect waves-light btn">
                         button
                     </a>
                   </div>
                 </div>
               </form>
            </div>
      </div>
   );
}
});

var mapStateToProps = function(state, props) {
    return {
        email: state
    };
};


var Container = connect(mapStateToProps)(EmailForm);


// module.exports = EmailForm;
module.exports = Container;
