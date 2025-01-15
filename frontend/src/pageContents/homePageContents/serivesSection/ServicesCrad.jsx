import React from 'react';
import PropTypes from 'prop-types';

const ServicesCrad = ({ servicesCard = {} }) => {
    const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = servicesCard;

    return (
        <div className='m-auto text-4xl text-white'>
            <img
                src={image}
                alt={heading || 'service image'}
                className='flex justify-center mx-auto h-40 w-80 rounded-2xl fill-inherit shadow-md shadow-black'
            />
            <h1 className='flex text-3xl font-prompt justify-center mx-auto mt-4'>{heading}</h1>
            <p className='paragraph flex justify-center text-sm mt-4 mx-auto w-80 h-60 p-3 overflow-hidden'>{description}</p>
        </div>
    );
};

ServicesCrad.propTypes = {
    card: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default ServicesCrad;
