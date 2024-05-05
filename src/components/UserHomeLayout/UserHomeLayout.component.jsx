import { Outlet } from 'react-router';

import ContentComponent from '../Content/Content.component';
import UserHeader from '../UserHeader/UserHeader.component';
import UserSidebar from '../UserSidebar/UserSidebar.component';
import { Body, Container } from './styled';

function UserHomeLayout({ children }) {
    return (
        <Container>
            <UserHeader />
            <Body>
                <ContentComponent layout={2}>{children}</ContentComponent>
            </Body>
        </Container>
    );
}
// <UserSidebar></UserSidebar>

export default UserHomeLayout;
