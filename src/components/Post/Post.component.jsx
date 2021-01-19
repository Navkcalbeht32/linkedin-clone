import React from 'react';
import './Post.styles.scss';
import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption/InputOption.component';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Chat from '@material-ui/icons/ChatOutlined';
import Share from '@material-ui/icons/ShareOutlined';
import Send from '@material-ui/icons/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="#676767" />
                <InputOption Icon={Chat} title="Comment" color="#676767" />
                <InputOption Icon={Share} title="Share" color="#676767" />
                <InputOption Icon={Send} title="Send" color="#676767" />
            </div>
        </div>
    )
}

export default Post;
