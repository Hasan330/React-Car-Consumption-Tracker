import React, { Component }      from 'react';
import { connect }               from 'react-redux';
import { fetchOwner }            from '../actions';
import _                         from 'lodash';

import '../App.css';

class OwnerShow extends Component{

	componentDidMount(){
			const { id } = this.props.match.params;  //provided by react-router
			this.props.fetchOwner(id);
	}

	renderCars(){
		return _.map(this.props.owner.cars, car => {
			return(
				<li className="list-group-item" key={car.brand}>
						<div>
							<ul className="list-group .col-xs-4">
								<li className="list-group-item">
									Car Brand: {car.brand}
								</li>
								<li className="list-group-item">
									Car Model: {car.model}
								</li>
								<li className="list-group-item">
									Car Millage: {car.millage}
								</li>
								<li className="list-group-item">
									Car Total Cost: {car.totalCost}
								</li>
								<li className="list-group-item">
									Last Refill: {car.refills[car.refills.length-1].cost}
								</li>
							</ul>
						</div>
				</li>
			)
		})
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
				<h2> User Details:  </h2>
				<h3> Id: {owner.id} | Name: {owner.name} </h3>
				<h3> Cars: </h3>
				
				<div className="container ">
					<div className="row">
						<ul className="list-group .col-xs-4">
							{this.renderCars()}
						</ul>
					</div>
				</div>

			</div>
		)
	}
}


function mapStateToProps({owners}, ownProps) {
	return { owner: owners[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchOwner } )(OwnerShow)