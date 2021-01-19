import { Avatar } from '@material-ui/core'
import React from 'react';
import './Sidebar.styles.scss';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

function Sidebar() {
    const recentItem = (topic) => {
        <div className="sidebar-recent-item">
            <span className="sidebar-hashtag">#</span>
            <p>{topic}</p>
        </div>
    };

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://freelinkedinbackgrounds.com/wp-content/uploads/2014/12/Nature-008.jpg" alt=""/>
                <Avatar className="profile-image" src="https://media-exp1.licdn.com/dms/image/C4E35AQGtvV4UTE17Iw/profile-framedphoto-shrink_100_100/0/1608324364735?e=1611082800&v=beta&t=P3v03crAqUQTBnS9jf2-dWorvWM2U1lIAXcF9Tpge44" />
                <h2>Alexander Sumoski</h2>
                <h4>Web Developer | Actively seeking new opportunities</h4>
                {recentItem("hey")}
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p className="stat-title" >Who viewed your profile</p>
                    <p className="stat-num">14</p>
                </div>
                <div className="sidebar-stat">
                    <p className="stat-title">Connections <br/><span className="stat-span" >Manage your Network</span> </p>
                    <p className="stat-num">534</p>
                </div>
                <div className="sidebar-stat promotion">
                    <p className="stat-title">Only available for a limited time <br/><span className="stat-span" >Reactivate Premium: 50% Off</span> </p>
                </div>
                <div className="my-saved">
                    <TurnedInIcon className="saved-icon" />
                    <span className="saved-span">My Items</span>
                </div>
            </div>
            <div className="sidebar-bottom">
                {recentItem("test")}
            </div>
        </div>
    )
};

export default Sidebar;
