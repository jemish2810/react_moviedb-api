import React, { Component } from "react";
// import axios from 'axios';
import {Redirect} from "react-router-dom";
import Admin from "./Populer";
export default class Login extends Component {
    constructor(props) {
        super(props)
    let login ="false"
    
        this.state = {
             name:"",
             password:"",
             login,     
             
        }
    }
    login(){
       
        fetch('http://127.0.0.1:8000/api/login',
        {
            method:"POST",
            body:JSON.stringify(this.state),
            headers: {  
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             }
        }).then((respo)=>{
            respo.json().then((result)=>{
                
                localStorage.setItem("token", result.token);
                this.setState({
                    login:true,
                })
                if(this.state.login){
                    this.props.history.push("/popular");
                  }
                console.log("state",this.state);
            })
        }).catch(err => {
            console.log("Error Reading data " + err);
        });
    }

  render() {
      
        return (

             <div className="auth-wrapper">
            <div className ="auth-inner">
                  
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label>Userame</label>
                                <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"  onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.login()}>Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
            
        </div>
        </div>
        );
    }
}