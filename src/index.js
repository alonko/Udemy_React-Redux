import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KRY = "AIzaSyAtBUGJtCrW9SxAfb_vHfnFTq0ZiHMWXyk";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
} 
ReactDOM.render(<App />, document.querySelector('.container'));
