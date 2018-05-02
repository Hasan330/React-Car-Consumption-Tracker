import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchOwner }       from '../actions';
import { Link }             from 'react-router-dom';

class OwnerDetails extends Component {

	componentDidMount(){
		if(!this.props.owner){
			console.log("Component didn't mount yet, fetching data")
			const { id } = this.props.match.params;  //provided by react-router
			this.props.fetchOwner(id);
		}
		else{
			console.log("Component did mount")
			// const { id } = this.props.match.params;  //provided by react-router

			this.props.fetchOwner(3);
		}
	}

	onDeleteClick(){
		const { id } = this.props.match.params;  //provided by react-router
		console.log(`Attempting to delete user with id ${id}`);
		// this.props.deletePost(id, () => {
		// 	this.props.history.push('/');
		// });
	}

	render(){
		console.log("Props in the render function are ", this.props)
		const { owner } = this.props;

		if(!owner){
			return(
				<div> Loading.. </div>
			)
		}
		else{
			console.log("Owner 111", owner)
		}

		return(
			<div>
			<Link className='btn btn-primary' to='/'>
						Back To Index
				</Link>

				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)} 
				>
					Delete Owner
				</button>

				<h3> {owner.name} </h3>
				<h6> ID: {owner.id} </h6>
				{}
				<p>  {owner.cars} </p>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	console.log("State in mapStateToProps inside owner-details is: ", state)
	// return { owner: state.owners[ownProps.match.params.id] }
	// return { post: posts[ownProps.match.params.id] }

	return { owner: state.owners };
}

export default connect(mapStateToProps, { fetchOwner: fetchOwner } )(OwnerDetails)