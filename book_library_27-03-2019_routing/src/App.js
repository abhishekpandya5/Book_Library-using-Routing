import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './components/Login';
import Logout from './components/Logout';
import BooksManager from './components/BookManager';
import Header from './components/Header';

class App extends Component {

  state = {
    username: "admin",
    password: "admin",
    isLogined: false
  };

  handleSubmit = (event, item) => {

    event.preventDefault();
    const {username, password} = this.state;

    if(item.username === username && item.password === password) {
      this.setState({
        isLogined: true
      });
    }
    // else{
    //   this.setState({
    //     isLogined: false
    //   });
    // }
  };

  

  render(){
    return(
      <Router>

         <Route exact 
          path = "/" render = {
             () => { return ( <div className = "bannerText">Sign in to Continue...</div> ); }
          } 
        />

        <Header/>

        <Route
         path = "/login" 
         component = { (path) => (
           <Login
            handleSubmit = {this.handleSubmit}
            isLogined = {this.state.isLogined}
           />
         )} 
         />

        <Route
          path="/logout"
          component={() => (
            <Logout
              toggleAuthentication={this.toggleAuthentication}
              isLogined={this.state.isLogined}
            />
          )}
        />

        <PrivateComponent
          path="/books"
          isLogined={this.state.isLogined}
          component={BooksManager}
        />
      </Router>
    );
  }
}

export default App;


const PrivateComponent = ({
  component: Component,
  isLogined,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render = {  props =>
        isLogined ? (
          <Component {...props} />
        ) : 
        (
          <>
            {alert('Please log in  to continue!')}
          <Redirect
            to={{
              pathname: "/login",
              state: isLogined
            }}
          />
          </>
        )
      }
    />
  );
};