import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLikeForm from './Component/MovieLikeForm'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <section>
                <MovieLikeForm/>
            </section>
        </div>
    );
}

export default App;
