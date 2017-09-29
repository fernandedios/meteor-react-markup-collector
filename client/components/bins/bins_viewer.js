import React, { Component } from 'react';
import { markdown } from 'markdown';  // in curly braces because the markdown library exports an object that has properties we need to use

class BinsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  }
}

export default BinsViewer;
