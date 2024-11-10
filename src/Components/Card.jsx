import React from 'react';
import PropTypes from 'prop-types';
import "./Card.css"

const Card = ({img, name, alt, description }) => {
    return (
        <div className="card col-2 p-0 col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <img src={img} alt={alt} />
            <h4>{name}</h4>
            <p>{description}</p>
            <button type="button" className="btn btn-dark">Mas informacion</button>
        </div>
    );
};

Card.propTypes = {
    _id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
};

export default Card;

