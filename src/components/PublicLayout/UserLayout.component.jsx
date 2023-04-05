import React from 'react';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import useAuth from '../../utils/useAuth';
import UserHeader from '../UserHeader/UserHeader.component';
import { ContainerStyled } from './styled';

function PublicLayout({ children }) {
    return (
        <ContainerStyled>
            <UserHeader />
            <Container fluid>{children ? children : <Outlet />}</Container>
        </ContainerStyled>
    );
}

export default PublicLayout;
