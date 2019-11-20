import React, {Component} from 'react';
import './form-add.css';

export default class FormAdd extends Component {

    state = {
        label: ''
    };


    onLabelChange = (evt) => {
        this.setState({
            label: evt.target.value
        });
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onInserted(this.state.label);
    this.setState({
        label: ''
    });
    };

    render() {

        return (<form className="form-add"
                    onSubmit={this.onSubmit}>
                    <input type="text" placeholder="What needs to be done"
                    onChange={this.onLabelChange}
                    value={this.state.label}/>
                    <button>
                        Add item</button>
                    </form>);
    };
};

