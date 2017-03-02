import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Tasks } from '../../api/tasks/tasks.js';

import './task.js';
import './todo.html';

Template.todo.onCreated(function todoOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.todo.helpers({
  // tasks: [
  //   {
  //     text: 'This is task 1'
  //   },
  //   {
  //     text: 'This is task 2'
  //   },
  //   {
  //     text: 'This is task 3'
  //   }
  // ]
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the tasks
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  },
});

Template.todo.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Meteor.call('tasks.insert', text);

    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
