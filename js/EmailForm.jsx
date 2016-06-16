var React = require('react');
// var ReactDOM = require('react-dom');
// var redux = require('react-redux');


var EmailForm = React.createClass({
   getInitialState: function() {
      return {value: ''};
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
   },
   handleClick: function() {
      console.log(this.state.value);
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

module.exports = EmailForm;
