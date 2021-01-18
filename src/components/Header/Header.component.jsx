import React from 'react';
import './Header.styles.scss';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1610987278~hmac=da88f75bbe58f07f432056c738eade46" alt=""/>
                <div className="header-search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header-right">
                
            </div>
        </div>
    )
}

export default Header;
