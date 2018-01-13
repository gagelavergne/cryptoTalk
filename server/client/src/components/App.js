import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import General from './General';
import Posts from './Posts';
import Friends from './Friends';
import WatchList from './WatchList';
import Suggested from './Suggested';
import Trending from './Trending';




class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return (

              
                <div className="container ">
                  <BrowserRouter>
                    <div>
                  <Header />
                  <Route exact path="/" component={Posts} />
                  <Route exact path="/General" component={General} />
                  <Route path="/Friends" component={Friends} />
                  <Route path="/WatchList" component={WatchList} />
                  <Route path="/Suggested" component={Suggested} />
                  <Route path="/Trending" component={Trending} />
                  </div>
              </BrowserRouter>
            </div>
    );
  }
}


export default connect(null, actions)(App);
