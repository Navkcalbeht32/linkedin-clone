import React from 'react';
import './Feed.styles.scss';
import CreateIcon from '@material-ui/icons/Create';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form action="">
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feed;
