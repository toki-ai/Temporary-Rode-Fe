import React from 'react';

import { AdminContainer } from './styled';
import { UserContainer } from './user.styled';

function ContentComponent({ children, layout }) {
    const Container = layout == 1 ? AdminContainer : UserContainer;
    return <Container>{children}</Container>;
}

export default ContentComponent;
