import React from 'react';
import './Gist.scss';

const Gist = (props) => {
    return (
        <div className='Gist'>
            <h4>{props.name}</h4>
        </div>
    );
}

export default Gist;