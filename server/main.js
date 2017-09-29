import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {

  // do not use fat arrow function if referencing this.userId
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBins', function() {
    // right now we only know the user's id, not the email, so get user account first
      const user = Meteor.users.findOne(this.userId);

      if(!user) { return }

      const email = user.emails[0].address;

      // cycle through all available bins, walk through each  sharedWith array, find element equal to email
      return Bins.find({
        sharedWith: { $elemMatch: { $eq: email } }
      });
  });
});
