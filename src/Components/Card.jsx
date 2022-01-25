import React from 'react';
import PropTypes from 'prop-types';

import "./Card.css"

const Card = (props) => {
    return (
        <>
            <div className="card col-2 p-0 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <img src={props.src} alt={props.alt} />
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <button type="button" className="btn btn-dark"><a href="#">Mas info</a></button>
            </div>
        </>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};

export default Card;
