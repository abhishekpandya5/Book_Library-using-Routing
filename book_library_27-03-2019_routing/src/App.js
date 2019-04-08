import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import BooksManager from './components/BookManager/BookManager';
import Header from './components/Header/Header';
import BookDescription from './components/BookDescription/BookDescription';
import Banner from './components/Banner/Banner';

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
    else{
      this.setState({
        isLogined: false
      });
    }
  }

  
  handleLogout = () => {
    this.setState({
      isLogined:false
    })
  }
  render(){
    return(
      <div  className="App">
      <Router>

          <Header isLogined={this.state.isLogined}/>
          

         <Route exact 
          path = "/" component = {Banner} exact
        />

        

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
            handleLogout={this.handleLogout}
            />
          )}
        />

        <PrivateComponent
          path="/books"
          isLogined={this.state.isLogined}
          component={BooksManager}
        />

        <PrivateComponent
          path="/book_description"
          isLogined={this.state.isLogined}
          component={BookDescription}
        />

      </Router>
      </div>
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