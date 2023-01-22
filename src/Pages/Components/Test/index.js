import react from 'react';

class Users extends react.Component {
  constructor(props) {
    super(props);
    console.log(this.props.firebase)
    this.state = {
      uid: '',
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
    
      this.props.firebase
        .users()
        .push({ userid: this.state.uid })
        .catch((error) => console.log(error));
    
      this.setState({ uid: '' });
    };
  

  render() {
    return (
      <div>
          <h1>Testing data input...</h1>
          <form onSubmit={this.handleSubmit}>
          <label>User Name:</label>
          
          <input
            type='text'
            name='uid'
            value={this.state.uid}
            onChange={this.handleChange}
          />
          <button type='submit'>Add User</button>
        </form>
      </div>
    );
  }
}
export default Users;