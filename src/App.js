import React, { Component } from "react";
import HomePage from "./components/pages/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import "./App.css";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


class App extends Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state)

        });
      }
      else
        this.setState({ currentUser: userAuth }); 

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
  
}

export default App;
