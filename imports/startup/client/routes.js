// Import all UI components
import '/imports/ui/common/commonHeader.js';
import '/imports/ui/home/home.js';
import '/imports/ui/todo/todo.js';

let masterLayout = 'masterLayout';

FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render(masterLayout, {
            main: 'home'
        });
    }
});

FlowRouter.route('/todo', {
    name: 'todo',
    action: function(params, queryParams) {
        BlazeLayout.render(masterLayout, {
            main: 'todo'
        });
    }
});
