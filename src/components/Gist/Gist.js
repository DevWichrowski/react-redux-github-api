import React from 'react';
import './Gist.scss';

const Gist = (props) => {
    return (
        <div className='Gist'>
            <h4><a href={props.htmlUrl}>{props.name}</a></h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Gist;