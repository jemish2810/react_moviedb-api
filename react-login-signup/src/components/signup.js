import React, { Component } from "react";

export default class SignUp extends Component {
   constructor() {
       super()
  
    this.state = {
        name: '',
        email: '',
        password: ''
    }
   }

   handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
       })
   }
    register = event =>{
        event.preventDefault();
        console.log("User name :"+ this.state.name)
        console.log("User Email :"  + this.state.email)

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        fetch('http://127.0.0.1:8000/api/register', {
            method: "POST", 
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' } 
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((response) =>{
              console.log('Success:', response)
              if (response.user){
                    this.props.history.push("/login");
              }
            } );
    }

    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
              <form method="post" onSubmit={this.register}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control"  name="name"  placeholder="name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block"  onClick={this.register} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </form>
            </div>
            </div>
        );
    }
}