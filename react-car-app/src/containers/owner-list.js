import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchOwners }       from '../actions';
import {Link}               from 'react-router-dom';


import _                    from 'lodash';
import '../App.css';


class OwnerList extends Component{

	componentDidMount() {
		this.props.fetchOwners();
	}

	renderOwners(){
		return _.map(this.props.owners, owner => {
			console.log("Owner is " + owner.id)
			return(
			<li className="list-group-item" key={owner.id}>
					<Link to={`/owners/get?id=${owner.id}`}>
						{owner.name}
					</Link>
			</li>
		)
		})
	}

	render(){
		console.log(`List of owners is: ${this.props.owners}`);
		return(
			<div>
				Welcome to the Owner's component
				<div className="container ">
					<div className="row">
						<ul className="list-group .col-xs-4">
						{this.renderOwners()}
					</ul>
					</div>
					
				</div>
			</div>
	)}
}

function mapStateToProps(state) {
	return { owners: state.owners };
}

//Shortcut to mapDispatchToProps
export default connect(mapStateToProps, { fetchOwners: fetchOwners })(OwnerList);