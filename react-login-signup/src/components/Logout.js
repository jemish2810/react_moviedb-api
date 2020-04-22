import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Header from './Header';

export class Logout extends Component {
 state = {
     navigation : false
 }
   logout = () => {
     alert('are you sure ')
    if (localStorage.length == 1) {
        localStorage.clear('token');
        this.props.history.push("/login");
    }
    else{
     alert("you are logout already")
     this.props.history.push("/login");
    } 
  }
    render() {
        
        return (
             <main class="py-3">
             <div className="container">
                    <div class="row justify-content-center ">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    Logout Component
                                </div>
                                <div class="card-body" style={{height:'500px'}}>
                                    <button className="btn btn-dark" onClick={this.logout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </main>
        )
    }
}

export default Logout
