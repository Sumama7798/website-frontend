import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ projectsCard = {} }) => {
    const {
        image = 'default-image.jpg',
        heading = 'No Title',
        description = 'No description available.',
    } = projectsCard;

    return (
        <div className='m-auto text-4xl text-white'>
            <img
                src={image}
                alt={heading || 'project image'}
                className='flex relative justify-center mx-auto h-[340px] w-[480px] object-fill rounded-2xl fill-inherit shadow-md shadow-black'
            />
            <h1 className='flex text-3xl font-prompt font-bold justify-center mx-auto mt-2'>{heading}</h1>
            <p className='flex justify-center font-prompt  text-sm mt-2 mx-auto w-80 h-auto p-3 overflow-hidden'>{description}</p>
        </div>
    );
};

ProjectCard.propTypes = {
    card: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default ProjectCard;
