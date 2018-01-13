  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { Link } from 'react-router-dom';
  // import * as actions from '../actions';

  class Header extends Component {
    renderContent() {
      switch (this.props.auth) {

        case null:
        return;

        case false:
          return (
            <li><a href="/auth/google">Login In With Google</a></li>
          );

          default:
            return (
              <ul>
              <li><a href="/General">General</a></li>
              <li><a href="/Friends">Friends</a></li>
              <li><a href="/WatchList">WatchList</a></li>
              <li><a href="/Suggested">Suggested</a></li>
              <li><a href="/Trending">Trending</a></li>
              <li><a href="/api/logout">Logout</a></li>
              </ul>
        );
      }
    }

//Link tag can be changed .. logo sends to / but we can keep it or add a filler
    render() {
      return (
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/' : '/posts'}
              className="left brand-logo">
            cryptoTalk
          </Link>
              <ul className="right">
                  {this.renderContent()}
              </ul>
          </div>
        </nav>
      );
    }
  }
    function mapStateToProps({ auth }) {
      return { auth };
    }

  export default connect(mapStateToProps)(Header);
  // export default connect(mapStateToProps, actions)(Header);
