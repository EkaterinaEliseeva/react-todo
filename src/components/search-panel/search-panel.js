import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    searchText = 'Type here to search';

    state = {
        term: ''
    };

    onSearchChange = (evt) => {
        const term = evt.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render () {
        return (<input className='search-panel' type="text"
        placeholder={this.searchText}
        onChange={this.onSearchChange}
        />);
    };
}
