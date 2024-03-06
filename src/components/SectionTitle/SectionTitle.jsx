import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>{title}</h3>
            <p className='max-w-4xl mx-auto text-center mt-5'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;