import React from 'react';
import './Header.styles.scss';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption.component';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Network from '@material-ui/icons/SupervisorAccountRounded';
import JobsIcon from '@material-ui/icons/BusinessCenterRounded';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-left">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1610987278~hmac=da88f75bbe58f07f432056c738eade46" alt=""/>
                    <div className="header-search">
                        <SearchIcon className="search-icon" />
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="header-right">
                    <HeaderOption title="Home" Icon={HomeRoundedIcon} />
                    <HeaderOption title="My Network" Icon={Network} />
                    <HeaderOption title="Jobs" Icon={JobsIcon} />
                    <HeaderOption title="Messaging" Icon={ChatIcon} />
                    <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                    <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E35AQGtvV4UTE17Iw/profile-framedphoto-shrink_100_100/0/1608324364735?e=1611082800&v=beta&t=P3v03crAqUQTBnS9jf2-dWorvWM2U1lIAXcF9Tpge44" title="Me"/>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
