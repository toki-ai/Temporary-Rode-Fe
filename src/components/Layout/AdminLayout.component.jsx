import React from 'react';

import { Outlet } from 'react-router-dom';

import AdminBg from '../../assets/backgroundAD/AdminBg.png';
import useAuth from '../../utils/useAuth';
import ContentComponent from '../Content/Content.component';
import HeaderComponent from '../Header/Header.component';
import Loading from '../Loading';
import Sidebar from '../Sidebar/Sidebar.component';
import { ContainerLayout, Body, Background, BackgroundGray } from './styled';

const AdminLayoutComponent = () => {
    const { isLoading } = useAuth();
    return (
        <Background url={AdminBg}>
            <ContainerLayout>
                <HeaderComponent />
                <Body>
                    <Sidebar />
                    <ContentComponent layout={1}>
                        <Outlet />
                    </ContentComponent>
                </Body>
            </ContainerLayout>
        </Background>
    );
};
// <BackgroundGray />

export default AdminLayoutComponent;
// <div className="site-layout-background"></div>
