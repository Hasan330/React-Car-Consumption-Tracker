import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Owner extends Component{

	// componentDidMount() {
	// 	this.props.fetchUsers();
	// }

	render(){
		console.log(`List of users is: ${this.props.users}`);
		return(
			<div>
				Welcome to the Owner's component
			</div>
	)}
}

function mapStateToProps(state) {
	return { users: state.users };
}

//Shortcut to mapDispatchToProps
export default connect(mapStateToProps, { fetchUsers: fetchUsers })(Owner);