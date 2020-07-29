import React from 'react';
import Banner from '../functional-components/Banner';
import Form from '../functional-components/Form';


class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Made Cooking Easy',
			heading: 'Get Delicious Recipe Inspirations'
		};
	}

	render() {
		return (
			<div>
				<div>
					<Banner title={this.state.title} heading={this.state.heading} />
					<p className="intro">
						Join fffunFood.com and get unlimited access to all different categories of recipes from any
							device. <br /> <strong>Join and get the recipes, lets cook!</strong>
					</p>
					<Form functions={this.props} />
				</div>
			</div>
		);
	}
}

export default Home;
