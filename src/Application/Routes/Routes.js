import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import TaskBoard from '../../Components/TaskBoard/TaskBoard';
function Routes(props) {
	return (
		<Router>
			<PrivateRoute component={TaskBoard}></PrivateRoute>;
		</Router>
	);
}

export default Routes;
