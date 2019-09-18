import React from 'react';
import logo from './logo.svg';
import './App.css';
function sayHello() {
    return <h1>Hello</h1>
}
function App() {
    return (
        <div>
            <sayHello>Hello</sayHello>
        </div>
    );
}

export default App;
