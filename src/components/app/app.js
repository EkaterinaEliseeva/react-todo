import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import FormAdd from "../form-add";
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make App'),
            this.createTodoItem('Sleep')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el)=> el.id === id);

            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (data) => {
        const newItem = this.createTodoItem(data);

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });

        console.log(data)
    };


    toggleProperty(array, id, propertyName) {
        const idx = array.findIndex((el)=> el.id === id);
        const oldItem = array[idx];
        const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
        return [
            ...array.slice(0, idx),
            newItem,
            ...array.slice(idx+1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    searchItem = (arr, term) => {
        if (term.lenght === 0) {
            return arr;
        }
        return arr.filter((el)=>
            el.label
            .toLowerCase()
            .includes(term.toLowerCase()));
    };

    updateTerm = (term) => {
        this.setState({term});
    };

    updateFilter = (filter) => {
    this.setState({filter});
    }


    filterItems = (arr, filter) => {
        switch (filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter((el)=> el.done === false);
            case 'done':
                return arr.filter((el)=> el.done);
            default: return arr;
        }

    }

    render() {

        const {todoData, term, filter} = this.state;
        const visibleItems = this.filterItems(this.searchItem(todoData, term), filter);
        const doneCount = todoData.filter((el)=> el.done).length;
        const todoCount = todoData.length - doneCount ;


        return (<div className="app">
            <AppHeader todo={todoCount} done={doneCount} />
            <SearchPanel onSearchChange={this.updateTerm} />
            <ItemStatusFilter filter={filter}
            onFilterChange={this.updateFilter}/>
            <TodoList todos={visibleItems}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                />
            <FormAdd onInserted={this.addItem} />
        </div>
    );
    }
};
