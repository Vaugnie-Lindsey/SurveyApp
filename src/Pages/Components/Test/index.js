import react from 'react';
 
class Users extends react.Component {
 constructor(props) {
   super(props);
   this.state = {
     userName: '',
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
      .push({ userName: this.state.userName })
      .catch((error) => console.log(error));
  
    this.setState({ userName: '' });
  };
 

 render() {
   return (
     <div>
        <h1>Testing data input...</h1>
        <form onSubmit={this.handleSubmit}>
         <label>User Name:</label>
         
         <input
           type='text'
           name='username'
           value={this.state.username}
           onChange={this.handleChange}
         />
         <button type='submit'>Add User</button>
       </form>
     </div>
   );
 }
}
export default Users;