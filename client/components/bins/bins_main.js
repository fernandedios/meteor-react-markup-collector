import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
  render() {
    // console.log(this.props.params.binId); // passed via path="bins/:binId"
    // console.log(this.props.bin); // passed via subscription

    if(!this.props.bin) { return <div>Loading...</div> }

    // another gotcha here, must check if the bin address is valid,
    // if not it should either show an error message, or redirect to a error page/index page

    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(binId) };
}, BinsMain);
