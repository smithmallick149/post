import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Createpost from './components/Createpost';
import Updatepost from './components/Updatepost';
import CardDetails from './components/CardDetails';

const Routes = (props) => {
	return (
		<section className="container">
			<Switch>
				<Route exact path="/create" component={Createpost} />
				<Route exact path="/cardDetails/:id" component={CardDetails} />
				<Route exact path="/update/:id" component={Updatepost} />
			</Switch>
		</section>
	);
};

export default Routes;
