import React, { Component }      from 'react';
import { connect }               from 'react-redux';
import { fetchOwner }            from '../actions';


class OwnerShow extends Component{

	componentDidMount(){
			console.log("Props in componentDidMount are: ", this.props)
			const { id } = this.props.match.params;  //provided by react-router
			this.props.fetchOwner(id);
	}


	render(){
		console.log("Owner in render method is: ", this.props.owner)
		const { owner } = this.props;

		if(!owner){
			return(
				<div> Loading.. </div>
			)
		}

		return(
			<div>
				<h2> Name: {owner.name}  ID: {owner.id} </h2>
				<p> {owner.cars[0].brand} </p>
			</div>
		)
	}
}


function mapStateToProps({owners}, ownProps) {
	console.log("Owners in mapStateToProps function are:", owners);
	return { owner: owners[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchOwner } )(OwnerShow)