import React, {Component} from "react";
import './app-header.css';

export default class AppHeader extends Component {
    render() {
        const {todo, done} = this.props;
        return (<div className='app-header'>
            <h1>
            My Todo List
        </h1>
        <span>{todo} more to do, {done} done</span>
        </div>);
    }
};
