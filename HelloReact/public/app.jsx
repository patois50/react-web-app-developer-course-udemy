var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = 'Patrick';
var someMessage = 'This is a neat message';

ReactDOM.render(
  <Greeter name={firstName} message={someMessage}/>,
  document.getElementById('app')
);
