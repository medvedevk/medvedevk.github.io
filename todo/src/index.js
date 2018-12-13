import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App'];

    return (
    <ul>
        <li>{items[0] }</li>
        <li>{items[1] }</li>
    </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo list</h1>;
};

const SearchPanel = () => {
    return  <input placeholder="search"/>;
};

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