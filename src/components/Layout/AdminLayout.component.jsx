import React from 'react';

import { Outlet } from 'react-router-dom';

import AdminBg from '../../assets/backgroundAD/AdminBg.png';
import ContentComponent from '../Content/Content.component';
import HeaderComponent from '../Header/Header.component';
import Sidebar from '../Sidebar/Sidebar.component';
import { ContainerLayout, Body, Background, BackgroundGray } from './styled';

const AdminLayoutComponent = () => {
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
