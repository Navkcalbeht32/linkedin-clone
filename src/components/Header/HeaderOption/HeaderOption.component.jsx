import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.styles.scss';

const HeaderOption = ({title, Icon, avatar}) => {
    return (
        <div className="header-option">
            {Icon && <Icon className="header-option-icon" />}
            {avatar && <Avatar src={avatar} className="header-option-avatar" />}
            <h4 className="header-option-title">{title}</h4>
        </div>
    )
}

export default HeaderOption;
