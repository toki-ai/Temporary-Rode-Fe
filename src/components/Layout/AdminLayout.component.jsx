import React from 'react';

import ContentComponent from '../Content/Content.component';
import HeaderComponent from '../Header/Header.component';
import Sidebar from '../Sidebar/Sidebar.component';
import { ContainerLayout, Body, Background, BackgroundGray } from './styled';

const AdminLayoutComponent = ({ children }) => {
    return (
        <ContainerLayout>
            <Background>
                <HeaderComponent />
                <Body>
                    <BackgroundGray />
                    <Sidebar />
                    <ContentComponent>
                        <div className="site-layout-background">{children}</div>
                    </ContentComponent>
                </Body>
            </Background>
        </ContainerLayout>
    );
};

export default AdminLayoutComponent;
