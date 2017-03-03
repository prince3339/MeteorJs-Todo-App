// Import all UI components
import '/imports/ui/common/commonHeader.js';
import '/imports/ui/home/home.js';
import '/imports/ui/todo/todo.js';
import '/imports/ui/airbnb/airbnb.js';

let defaultLayout = 'defaultLayout';
let nonScrollingLayout = 'nonScrollingLayout';

FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render(defaultLayout, {
            main: 'home'
        });
    }
});

FlowRouter.route('/todo', {
    name: 'todo',
    action: function(params, queryParams) {
        BlazeLayout.render(defaultLayout, {
            main: 'todo'
        });
    }
});

FlowRouter.route('/airbnb', {
    name: 'airbnb',
    action: function(params, queryParams) {
        BlazeLayout.render(nonScrollingLayout, {
            main: 'airbnb'
        });
    }
});
