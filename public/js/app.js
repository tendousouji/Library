var InputField = React.createClass({
  getInitialState: function () {
    return {name: this.props.initialName};
  },
  onChange: function (event) {
    if (this.state.name !== event.target.value) {
      this.setState({
          name: event.target.value
      });
    }
  },
  render: function() {
    return(
      <div className="row input-field">
        <div className="col-lg-2 col-md-2">
          <h3>{this.props.InputLabel}</h3>
        </div>
        <div className="col-lg-2 col-md-2">
          <p>Hello {this.state.name}</p>
          <input value={this.state.name} onChange={this.onChange} />
        </div>
      </div>
    );
  }
});

var BookList = React.createClass({
  getInitialState: function() {
    return{
      bookList: ''
    };
  },
  componentDidMount: function(){
    $.ajax({
      url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
        this.setState({
            bookList: 'Hi'
        });
    }
  )},
  render: function() {
    return(
      <div>
        <h2>Hello World</h2>
        <p>{this.props.bookList}</p>
      </div>
    );
  }
});

var NewBookForm = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Add New Book</h1>
        <InputField InputLabel="Book Title" name=""/>
        <InputField InputLabel="Book Description" name=""/>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return(
      <div>
        <NewBookForm/>
        <BookList/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("container"));