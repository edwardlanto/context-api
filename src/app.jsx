import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import { PhoneProvider } from './components/contexts/PhoneContext';
import './styles/partials/main.scss';
import { AnimatedSwitch, spring } from 'react-router-transition';


function bounce(val) {
	return spring(val, {
		stiffness: 300,
		damping: 40
	});
}

const App = () => (
	<div>
		<Router>
			<PhoneProvider>
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atActive={{ opacity: bounce(1) }}
					atLeave={{ opacity: bounce(1) }}
					className="switch-wrapper"
				>
					<Route path="/page" component={Page} />
					<Route path="/" component={Home} />
				</AnimatedSwitch>
			</PhoneProvider>
		</Router>
	</div>
);

export default App;
