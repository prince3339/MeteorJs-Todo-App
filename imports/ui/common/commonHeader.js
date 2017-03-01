import { Template } from 'meteor/templating';

import './commonHeader.html';

Template.navBar.onCreated(function(){
  Tracker.autorun(function(){
    if(!Meteor.userId()) {
      //console.log('triger entered');
      FlowRouter.go('/');
    }else {
      //FlowRouter.go('/home');
    }
  });
});

Template.navBar.onRendered(function(){

});

Template.navBar.events({

});

Template.navBar.helpers({

});
