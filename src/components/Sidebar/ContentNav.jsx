import React from 'react';

import { Link } from 'react-router-dom';

import { Icon, Text } from './styled';

function ContentNav({ items }) {
    return items.map((item, index) => {
        return (
            <div key={index}>
                <Icon>{item.icon}</Icon>
                <Text>
                    <Link to={item.Action}>{item.Info}</Link>
                </Text>
            </div>
        );
    });
}

export default ContentNav;
