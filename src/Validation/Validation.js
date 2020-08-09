import React from 'react';

const validation = ( props ) => {
    let message = null;
    if (props.paragraph.length < 5 ) {
        message = <div><p> Text too short </p></div>
    } else if (props.paragraph.length > 15 ) {
        message = <div><p> Text too long </p></div>
    }
    return (
        message
    )
};

export default validation;