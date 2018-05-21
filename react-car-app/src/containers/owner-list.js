import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import { fetchOwners }       from '../actions';
import {Link}                from 'react-router-dom';

import _                     from 'lodash';

class OwnerList extends Component{

	componentDidMount() {
		this.props.fetchOwners();
	}

	renderOwners(){
		return _.map(this.props.owners, owner => {
			return(
			<li className="list-group-item" key={owner.id}>
					<Link to={`/owners/get/${owner.id}`}>
						{owner.name}
					</Link>
			</li>
		)
		})
	}

	render(){

		if(_.isEmpty(this.props.owners)){
			return (
				<div>
					<h3> Loading.. </h3>
					<h3> Want to do something useful? check for CORS errors </h3>
				</div>
			)
		}

		return(
			<div>
				<div>
					<Link className='btn btn-primary' to='/'>
						Back To Homepage
					</Link>
				</div>

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