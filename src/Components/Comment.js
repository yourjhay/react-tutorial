import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import Card from './Card';

const Comment = () => {

    return (
        <Card cardHeader="Comments">
            <div className="ui comments">
            <CommentDetail 
                author="Rey Jhon" 
                avatar={faker.image.avatar()}         
            />            
            <CommentDetail 
                author="Sam " 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Cherry Ann" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Charm" 
                avatar={faker.image.avatar()}
            />
            </div>
        </Card>
    );

};
export default Comment;