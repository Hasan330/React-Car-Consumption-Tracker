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
		console.log("Props in render method are: ", this.props)
		console.log("State in render method is: ", this.state)
		const { owners } = this.props;

		if(!owners){
			return(
				<div> Loading.. </div>
			)
		}

		return(
			<div>
				In Owner Show Container
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	console.log("State is:", state);
	// return { owner: owners[ownProps.match.params.id] }
	return { owner: state.owners };
}

export default connect(mapStateToProps, { fetchOwner } )(OwnerShow)