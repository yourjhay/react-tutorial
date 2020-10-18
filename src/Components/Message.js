import React from 'react';


const Message = (props) => {

    return (
       <div className="ui message">
             <div className="header">{props.header}</div>
             {props.children}
       </div>
    );

};
export default Message;