import UserHeader from '../UserHeader/UserHeader.component';
import UserSidebar from '../UserSidebar/UserSidebar.component';
import { Container } from './styled';

function UserHomeLayout({ children }) {
    return (
        <Container>
            <UserHeader></UserHeader>
            <UserSidebar></UserSidebar>
            {children}
        </Container>
    );
}

export default UserHomeLayout;
