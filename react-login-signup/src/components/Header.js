import React from 'react'
import { NavLink, Link ,withRouter} from "react-router-dom"
// import styles from './Navbar.module.css'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import Search from './Search';

const Header =(props) => {
        return (
                <div>
                    <nav className="navbar navbar-expand-md  navbar-dark bg-dark shadow-sm">
                       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                           <Link className='navbar-brand ' to='/'> 
                              | MovieDb
                            </Link>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className="nav-item ">
                                 <NavLink className="nav-link" exact to="/">Home</NavLink>
                              </li>
                               <li className="nav-item">
                                  <NavLink className="nav-link" exact to="/about">About</NavLink>
                               </li>
                               </ul>
                                { 
                                    localStorage.length == 1 ?
                                    <React.Fragment>
                                    <ul className="navbar-nav  mt-2 mt-lg-0">
                                            <NavLink className="nav-link mr-3" to="/popular">Popular</NavLink>
                                            <NavLink className='nav-link' to='/logout'>Log out</NavLink>     
                                          <Form  action="" onSubmit={props.handlesubmit}>
                                            <FormGroup >
                                            <Input type="search" name="search" id="search" placeholder="Search Movies" onChange={props.handlechange}/>
                                            </FormGroup>
                                          </Form> 
                                    </ul>
                                    </React.Fragment> 
                                      :
                                    <React.Fragment>
                                       <ul className="navbar-nav  mt-2 mt-lg-0">
                                      <NavLink className='nav-link mr-3 ' to='/login'>Lodg in</NavLink>
                                      <NavLink className='nav-link' to='/sign-up'>Sign up</NavLink>
                                      </ul>
                                    </React.Fragment>
                                  }
                            </div>
                          </nav>  
                      </div>
              )
}

export default withRouter(Header)

