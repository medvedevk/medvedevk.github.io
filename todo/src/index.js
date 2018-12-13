import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {

    const loginBox = <span>Log in Please</span>
    return (
        <div>
            { loginBox }
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));