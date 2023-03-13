import React from 'react';

import { Container, Content } from './styled';

function ContentComponent({ children }) {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
}

export default ContentComponent;
