import React from 'react';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import UserHeader from '../UserHeader/UserHeader.component';
import { ContainerStyled } from './styled';

function UserLayoutComponent({ children }) {
    return (
        <ContainerStyled>
            <UserHeader />
            <Container fluid>{children ? children : <Outlet />}</Container>
        </ContainerStyled>
    );
}

export default UserLayoutComponent;
