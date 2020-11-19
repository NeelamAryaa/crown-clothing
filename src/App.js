import React, { Component } from "react";
import HomePage from "./components/pages/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import "./App.css";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
     
        });
      }
      else
      setCurrentUser(userAuth); 

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
