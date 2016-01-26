var InputField = React.createClass({
  render: function() {
    return(
      <div className="row input-field">
        <div className="col-lg-2 col-md-2">
          <h3>{this.props.InputLabel}</h3>
        </div>
        <div className="col-lg-2 col-md-2">
          <input/>
        </div>
      </div>
    );
  }
});

var BookItem = React.createClass({  
  render: function() {
    return(
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
});

var BookList = React.createClass({
  getInitialState: function() {
    return{
      dataList: []
    };
  },
  componentDidMount: function(){
    $.post("/api/book", function(result) {
      // var BookList = result[0];
      // console.log(BookList);
      if (this.isMounted()) {
        this.setState({
          dataList: result
        });
      }
    }.bind(this));
  },
  render: function() {
    var items = this.state.dataList.map(function (onebook){
      return(
        <BookItem title={onebook.title} description={onebook.description} />
      );
    });
    return(
      <div>
        <h1>Book List</h1>
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
            {items}
          </tbody>
        </table>
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