import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  onBinClick(event) {
      event.preventDefault();

      // error object param is always returned, followed by
      // whatever 'bins.insert' returns, in this case, the newly created bin's id
      Meteor.call('bins.insert', (error, binId) => {
        //console.log(bin);
        browserHistory.push(`/bins/${binId}`); // 'push' a new url to the browser history, i.e. navigate to new url
      });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
