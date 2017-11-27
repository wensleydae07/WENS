'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function TodoItem(_ref) {
    var task = _ref.task;
    var time = _ref.time;
    var _onClick = _ref.onClick;

    return React.createElement(
        'div',
        { onClick: function onClick() {
                return _onClick();
            }, className: 'todo-item' },
        React.createElement(
            'div',
            { className: 'todo-task' },
            task
        ),
        React.createElement(
            'div',
            { className: 'add-time' },
            time
        )
    );
};
var TaskAdder = function TaskAdder(_ref2) {
    var addTask = _ref2.addTask;
    return React.createElement(
        'div',
        { className: 'adder-container' },
        React.createElement(
            'div',
            { className: 'input-container' },
            React.createElement('input', { className: 'task-input', id: 'task-ip' })
        ),
        React.createElement(
            'div',
            { className: 'btn-container' },
            React.createElement(
                'div',
                { className: 'btn', onClick: function onClick() {
                        return addTask();
                    } },
                'Add'
            )
        )
    );
};
var TodoList = function TodoList(_ref3) {
    var tasks = _ref3.tasks;
    var handleDelete = _ref3.handleDelete;

    var todoList = tasks.map(function (taskItem, index) {
        var task = taskItem.task;
        var time = taskItem.time;
        return React.createElement(TodoItem, { key: index, onClick: function onClick() {
                return handleDelete(index);
            }, task: task, time: time });
    });
    return React.createElement(
        'div',
        { className: 'todolist' },
        todoList
    );
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = {
            todoList: []
        };
        return _this;
    }

    App.prototype.handleAdd = function handleAdd() {
        var task = document.getElementById('task-ip').value;
        if (!task) {
            return null;
        }
        var time = new Date().toLocaleTimeString('en-US');

        var newTask = { task: task, time: time };

        var newTaskList = this.state.todoList.concat(newTask);

        this.setState({
            todoList: newTaskList
        });

        document.getElementById('task-ip').value = null;
    };

    App.prototype.handleDelete = function handleDelete(index) {
        console.log(index);

        this.setState(function (prevState) {
            return {
                todoList: prevState.todoList.splice(parseInt(index, 10), 1) ? prevState.todoList : 'xd'
            };
        });
    };

    App.prototype.render = function render() {
        var _this2 = this;

        return React.createElement(
            'div',
            { className: 'App' },
            React.createElement(
                'div',
                { className: 'heading' },
                'My React todo App'
            ),
            React.createElement(TaskAdder, { addTask: function addTask() {
                    return _this2.handleAdd();
                } }),
            React.createElement(TodoList, { className: 'todolist', tasks: this.state.todoList, handleDelete: function handleDelete(index) {
                    return _this2.handleDelete(index);
                } })
        );
    };

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));