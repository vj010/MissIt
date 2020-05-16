import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes/Routes';
import GamePage from '../Components/GamePage/GamePage';
function App(props) {
	return <GamePage />;
}

export default App;
