import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {api_key} from './moviedbconfig'

import Login from "./components/login";
import SignUp from "./components/signup";
import Populer from './components/Populer';
import  About  from './components/About';
import Header from './components/Header';
import Logout from './components/Logout';
import { HardwarePhoneAndroid } from 'material-ui/svg-icons';
import Home from './components/Home';
import Search from './components/Search';
import Movielist from './components/movielist/Movielist';
import Test from './components/Test';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token:localStorage.getItem("token"),
      loggedIn:false,
      search:'',
      movies:[],
      popular:[]
    }; 
    }
  handlesubmit = (e) =>{
    e.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.search}`)
    .then(data =>data.json())
    .then(data=>{
      this.setState({movies: [...data.results]})
      console.log("Hear is your search data",data.results);
      
    })
  }
  handlechange =(e) =>{
    this.setState({search: e.target.value})
  }

  componentDidMount(){
     
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        .then(data =>data.json())
        .then(data=>{
          this.setState({popular: [...data.results]})
          console.log('Hear is your populer movie data',this.state.popular)
          if(localStorage.getItem('token') != null ){
              this.setState({loggedIn: true}); 
          } 
    })
  }
  logout = () => {
    localStorage.clear('token');
    this.setState({
      
    })
  }


  render() {
    return (
        <Router>
        <div className="App ">
            <Header  handlesubmit={this.handlesubmit} handlechange={this.handlechange}/>
            {/* <Search handlesubmit={this.handlesubmit} handlechange={this.handlechange}/> */}
            {/* <Movielist movies={this.state.movies}/> */}
            {/* <Test  movies={this.state.popular} search={this.state.movies}/> */}
            <Switch>
             <Route exact path='/' component={Home}/>
             <Route path="/login" component={Login} />
             <Route path="/sign-up" component={SignUp} />
             <Route path="/logout" component={Logout} />
             <Route path="/about" component={About} />
             <Route path="/popular"  component={() =>  <Test  movies={this.state.popular} search={this.state.movies}/>}  />
            </Switch>
          </div>  
       
        </Router>
    );
  }
}

export default App;