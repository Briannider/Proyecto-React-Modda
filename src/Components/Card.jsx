import React from 'react';
import PropTypes from 'prop-types';

import "./Card.css"

const Card = ({ img, alt, name, description }) => {
    return (<>
        <img src={img} alt={alt} />
        <h4>{name}</h4>
        <p>{description}</p>
        <button type="button" className="btn btn-dark"><a href="#">Mas info</a></button>
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
