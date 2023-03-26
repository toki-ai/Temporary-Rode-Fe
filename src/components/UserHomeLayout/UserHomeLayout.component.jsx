import { Outlet } from 'react-router';

import ContentComponent from '../Content/Content.component';
import UserHeader from '../UserHeader/UserHeader.component';
import UserSidebar from '../UserSidebar/UserSidebar.component';
import { Body, Container } from './styled';

function UserHomeLayout() {
    return (
        <Container>
            <UserHeader></UserHeader>
            <Body>
                <UserSidebar></UserSidebar>
                <ContentComponent>
                    {/* {children} */}
                    <Outlet />
                </ContentComponent>
            </Body>
        </Container>
    );
}

export default UserHomeLayout;
