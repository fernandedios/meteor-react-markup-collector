import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze'; // blaze is a library that can render templates provided by meteor

class Accounts extends Component {

  // called one time automatically
  componentDidMount() {
    // Render the Blaze accounts form then find the div we just rendered
    // in the 'render' method and place the Blaze accounts form in that div

    // whenever we render a blaze template, it returns a reference to the template it rendered
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // called whenever component is about to be removed
  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those foms ourselves

    Blaze.remove(this.view); // garbage collection
  }

  render() {
    return(
      <div ref="container"></div>
    );
  }
}

export default Accounts;
