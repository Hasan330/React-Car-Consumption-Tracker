import React, { Component }      from 'react';
import { connect }               from 'react-redux';
import { fetchOwner }            from '../actions';


class OwnerShow extends Component{

	componentDidMount(){
		// if(!this.props.owner){
			const { id } = this.props.match.params;  //provided by react-router
			this.props.fetchOwner(id);
		// }
	}


	render(){
		const { owner } = this.props;

		if(!owner){
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


function mapStateToProps({ owners }, ownProps) {
	return { owner: owners[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchOwner } )(OwnerShow)