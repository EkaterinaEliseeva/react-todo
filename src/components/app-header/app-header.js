import React from "react";
import './app-header.css';

const AppHeader = () => {
    return <div className='app-header'>
        <h1>
            My Todo List
        </h1>
        <span>{Math.floor(Math.random()*10)} more to do, {Math.floor(Math.random()*10)} done</span>
    </div>
}

export default AppHeader;
