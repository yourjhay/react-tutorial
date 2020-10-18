import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
             <a href="/" className="avatar">
                 <img src={props.avatar} alt="avatar"></img>
             </a>
             <div className="content">
                <a className="author" href="/">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 am</span>
                </div>
                <div className="text">
                    Hello Nice Post
                </div>
             </div>             
         </div>        
    );
};

export default CommentDetail;