import React from 'react';

import { Link } from 'react-router-dom';

import { AdminIcon, AdminItem, AdminText } from './AdminContentNav.styled';
import { UserIcon, UserItem, UserText } from './UserContentNav.styled';

function ContentNav({ items, layout }) {
    const Item = layout == 1 ? AdminItem : UserItem;
    const Icon = layout == 1 ? AdminIcon : UserIcon;
    const Text = layout == 1 ? AdminText : UserText;
    const handleOnClick = () => {
        localStorage.clear();
    };
    return items.map((item, index) => {
        return (
            <Item key={index}>
                <Icon>{item.icon}</Icon>
                {index < items.length - 1 ? (
                    <Text>
                        <Link to={item.Action}>{item.Info}</Link>
                    </Text>
                ) : (
                    <Text>
                        <Link onClick={handleOnClick}>{item.Info}</Link>
                    </Text>
                )}
            </Item>
        );
    });
}

export default ContentNav;
