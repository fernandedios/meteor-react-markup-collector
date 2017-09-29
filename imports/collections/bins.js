import { Mongo } from 'meteor/mongo';

// do not use a fat arrow function, it conflicts with this.userId
// in every meteor method that operates on an object, it takes that object into a parameter
// -- e.g. 'bins.remove': function(bin)
Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      // set sensible defaults when inserting data
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId // reference to logged in user, available everywhere on the meteor app
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function(bin, content) {
    // use mongo modifier $set to update
    return Bins.update(bin._id, { $set: { content } }); // es6 destructure
    // return Bins.update(bin._id, { $set: { content: content } });
  },

  'bins.share': function(bin, email) {
    console.log(bin.sharedWith);
    // use mongo modifier $push to update an array by pushing a value
    return Bins.update(bin._id, { $push: { sharedWith: email }});
  }
});

export const Bins = new Mongo.Collection('bins');
