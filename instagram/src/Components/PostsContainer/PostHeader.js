import React from 'react';
import './Posts.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-header-thumbnail">
             <img alt="post-header-thumb" className="post-header-img" src={props.thumbnailUrl} />
            </div>
            <div className="post-header-user">
               {props.username}
            </div>
        </div>
    );
};

export default PostHeader;