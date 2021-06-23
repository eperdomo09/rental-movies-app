import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NoFound from "./components/no-found";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({user});
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MoviesForm} />
            <Route path="/movies" render={(props)=> <Movies {...props} user={this.state.user}/>} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NoFound} />
            <Redirect from="/" to="/movies" exact />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
