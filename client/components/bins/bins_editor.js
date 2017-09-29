import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown'; // imports and execute the file markdown

class BinsEditor extends Component {
  onEditorChange(content) {
      //console.log(content);
      Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    // two sets of curly braces: first set tells jsx that it is a variable, 2nd set tells the variable is an object
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
         value={this.props.bin.content} 
         onChange={this.onEditorChange.bind(this)}
         options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinsEditor;
