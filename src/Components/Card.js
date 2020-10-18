import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card">
            <div className="content">
            <div className="header" herf="/">{props.cardHeader}</div>
            {props.children}
            </div>            
        </div>
    );
};

export default Card;