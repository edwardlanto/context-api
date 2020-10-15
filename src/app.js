import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import { PhoneProvider } from './components/contexts/PhoneContext';
import './styles/partials/main.scss';

const App = () => (
	<div>
		<Router basename={process.env.PUBLIC_URL}>
			<PhoneProvider>
				<Switch>
					<Route path="/page" component={Page} />
					<Route path="/" component={Home} />
				</Switch>
			</PhoneProvider>
		</Router>
	</div>
);

export default App;
