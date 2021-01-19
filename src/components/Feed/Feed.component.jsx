import React, {useState, useEffect} from 'react';
import './Feed.styles.scss';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption.component';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubjectIcon from '@material-ui/icons/Subject';
import Post from '../Post/Post.component';
import { db } from '../../firebase.js';


const Feed = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: db.data(),                
                }))
            )
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        
    }

    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" placeholder="Start a post"/>
                        <button onclick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Goal" color="#cea2cc" />
                    <InputOption Icon={SubjectIcon} title="Write article" color="#f5987e" />
                </div>
            </div>

            {posts.map((post) => (
                <Post />
            ))}

            <Post 
            name="Alexander Sumoski"
            description="Web Developer | Actively seeking new opportunities"
            message="This is a test post."
            />
        </div>
    )
}

export default Feed;
