import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render () {
        const {label, done,
            important, onDeleted,
            onToggleImportant,
            onToggleDone} = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }


        return (<span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={onToggleDone}>
                      {label}
                </span>

                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                            onClick={onDeleted}
                            >
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                        onClick={onToggleImportant}
                        className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>

            </span>);
    }
}
