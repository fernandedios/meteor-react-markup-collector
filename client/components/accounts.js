import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze'; 

class Accounts extends Component {
  componentDidMount() {

    // whenever we render a blaze template, it returns a reference to the template it rendered
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // called whenever component is about to be removed
  componentWillUnmount() {
    // Go find the forms we created and destroy them
    Blaze.remove(this.view); // garbage collection
  }

  render() {
    return(
      <div ref="container"></div>
    );
  }
}

export default Accounts;
