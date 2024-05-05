import React from 'react';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import useAuth from '../../utils/useAuth';
import Loading from '../Loading';
import UserHeader from '../UserHeader/UserHeader.component';
import { ContainerStyled } from './styled';

function UserLayoutComponent({ children }) {
    const { isLoading } = useAuth();
    return (
        <ContainerStyled>
            <UserHeader />
            <Container fluid>{isLoading ? <Loading /> : <Outlet />}</Container>
        </ContainerStyled>
    );
}

export default UserLayoutComponent;
