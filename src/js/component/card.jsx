import React from "react";
import PropTypes from "prop-types";

export function Card(props){
    return (
    <div className="col-md-3 p-1">
        <div className="card" >
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.buttonUrl} target="_blank" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    </div>
)};

Card.propTypes = {
    imageUrl: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
};

