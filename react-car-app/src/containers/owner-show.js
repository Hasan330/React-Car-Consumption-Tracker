import React, { Component }      from 'react';
import { connect }               from 'react-redux';
import { fetchOwner }            from '../actions';
import {Link}                    from 'react-router-dom';
import _                         from 'lodash';


import '../App.css';

class OwnerShow extends Component{

	componentDidMount(){
			const { id } = this.props.match.params;  //provided by react-router
			this.props.fetchOwner(id);
	}

	renderCars(){
		let { cars } = this.props.owner;
		console.log("CARS " , cars)
		
		function hasRefills(car) {
			return (car.refills.length ? car.refills[car.refills.length-1].cost : 'Car has no refills yet !!')
		}

		return _.map(cars, car => {
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
									Last Refill: {hasRefills(car)}
								</li>
							</ul>
						</div>
				</li>
			)
		})
	}


	render(){
		function hasCars() {
			return (owner.cars.length ? 'Cars' : 'User has no cars yet !!')
		}

		const { owner } = this.props;

		if(!owner){
			return(
				<div> Loading.. </div>
			)
		}

		return(
			<div>
				<Link className='btn btn-primary' to='/owners'>
						Back To Owners
				</Link>
				<h2> User Details:  </h2>
				<h3> Id: {owner.id} | Name: {owner.name} </h3>
				<h3> { `${hasCars()}`} </h3>
				
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