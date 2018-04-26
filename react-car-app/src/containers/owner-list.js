import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

import _ from 'lodash';

class Owner extends Component{

	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers(){
		return _.map(this.props.users, user => {
			console.log("User is " + user.id)
			return(
			<li key={user.id}>
				{user.name}
			</li>
		)
		})
		

	}

	render(){
		console.log(`List of users is: ${this.props.users}`);
		return(
			<div>
				Welcome to the Owner's component
				<div>
					<ul className="list-group">
						{this.renderUsers()}
					</ul>
				</div>
			</div>
	)}
}

function mapStateToProps(state) {
	return { users: state.users };
}

//Shortcut to mapDispatchToProps
export default connect(mapStateToProps, { fetchUsers: fetchUsers })(Owner);