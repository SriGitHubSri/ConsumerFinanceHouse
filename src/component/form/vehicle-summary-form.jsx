import React, { Component } from "react";
import "../../styles/finhouse.css";
import { Typography, Paper, } from '@material-ui/core';

export class VehicleSummaryForm extends Component {

    constructor() {
        super();
    }

    render() {
        //const { vehicle } = this.props.vehicle;
        // console.log('vehicle', this.props.vehicle);
        return (
            <React.Fragment>
                <div>
                    {this.props.vehicle &&
                        <div>

                            {/* <hr className="heading-divider" /> */}
                            <div className="level">
                                <p className="subtitle is-4">
                                    <strong>Vehicle Summary</strong>
                                </p>

                            </div>
                            <br />

                            <div className="data-container">
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column">
                                                <strong>Make : </strong>
                                                <span> {this.props.vehicle.make_name} </span>
                                            </div>
                                            <div className="column">
                                                <strong>Model : </strong>
                                                <span> {this.props.vehicle.model_name} </span>
                                            </div>
                                            <div className="column">
                                                <strong>Description : </strong>
                                                <span> {this.props.vehicle.description} </span>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <strong>Price : </strong>
                                                <span> {this.props.vehicle.cash_price} </span>
                                            </div>
                                            <div className="column">
                                                <strong>Transmission : </strong>
                                                <span> {this.props.vehicle.transmission} </span>
                                            </div>
                                            <div className="column">
                                                <strong>Body Style : </strong>

                                                <span> {this.props.vehicle.body_style} </span>
                                            </div>
                                        </div>

                                        <div className="columns">
                                            <div className="column">
                                                <strong>Color : </strong>
                                                <span> {this.props.vehicle.color[0]} </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* <hr className="heading-divider" /> */}
                        </div>}
                </div>

            </React.Fragment>
        );
    }


}

VehicleSummaryForm.propTypes = {};

VehicleSummaryForm.defaultProps = {};
