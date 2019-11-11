import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        };

        this.onLabelClick = () => {
            this.setState({
                done: !this.state.done
            });
        }

        this.onImportantButtonClick = () => {
            this.setState({
                important: !this.state.important
            })
        }
    }

    render () {
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }


        return (<span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={this.onLabelClick}>
                      {label}
                </span>

                <button type="button"
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                        onClick={this.onImportantButtonClick}
                        className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>

            </span>);
    }
}
