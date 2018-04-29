import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchUsers }       from '../actions';
import {Link}               from 'react-router-dom';


import _                    from 'lodash';
import '../App.css';


class OwnerList extends Component{

	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers(){
		return _.map(this.props.users, user => {
			console.log("User is " + user.id)
			return(
			<li className="list-group-item" key={user.id}>
					<Link to={`/owners/get?id=${user.id}`}>
						{user.name}
					</Link>
			</li>
		)
		})
	}

	render(){
		console.log(`List of users is: ${this.props.users}`);
		return(
			<div>
				Welcome to the Owner's component
				<div className="container ">
					<div className="row">
						<ul className="list-group .col-xs-4">
						{this.renderUsers()}
					</ul>
					</div>
					
				</div>
			</div>
	)}
}

function mapStateToProps(state) {
	return { users: state.users };
}

//Shortcut to mapDispatchToProps
export default connect(mapStateToProps, { fetchUsers: fetchUsers })(OwnerList);