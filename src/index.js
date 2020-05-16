import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application/App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('app'));

// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }

// function App() {
// 	return (
// 		<div>
// 			<Welcome name="Sara" />
// 			<Welcome name="Cahal" />
// 			<Welcome name="Edite" />
// 		</div>
// 	);
// }

ReactDOM.render(<App />, document.getElementById('app'));
