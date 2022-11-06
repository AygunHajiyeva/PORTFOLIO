import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    return (
        <Router>
            <div className='App'>
              <Sidebar />
            </div>
        </Router>

    )
}

export default App