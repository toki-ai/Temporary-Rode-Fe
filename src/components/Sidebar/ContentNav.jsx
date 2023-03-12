import React from 'react';

import { Link } from 'react-router-dom';

import { Icon, Item, Text } from './styled';

function ContentNav({ items }) {
    return items.map((item, index) => {
        return (
            <Item key={index}>
                <Icon>{item.icon}</Icon>
                <Text>
                    <Link to={item.Action}>{item.Info}</Link>
                </Text>
            </Item>
        );
    });
}

export default ContentNav;
