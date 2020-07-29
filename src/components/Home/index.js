import React from 'react';
import Banner from '../functional-components/Banner';
import Form from '../functional-components/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Made Cooking Easy',
			heading: 'Get Delicious Recipe Inspirations',
			toastValid: null
		};
	}

	toast(val) {
		if (val === true) {
			toast.error('There seems to be an error with your phone number.', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: 0,
			});
		} else {
			toast.success('Your phone number is valid.', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: 0,
			});
		}
	}

	render() {
		return (
			<div>
				<ToastContainer />
				<div>
					<Banner title={this.state.title} heading={this.state.heading} />
					<p className="intro">
						Join fffunFood.com and get unlimited access to all different categories of recipes from any
							device. <br /> <strong>Join and get the recipes, lets cook!</strong>
					</p>
					<Form functions={this.props} toast={this.toast} />
				</div>
			</div>
		);
	}
}

export default Home;
