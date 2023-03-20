import Sidebar from '../Sidebar/Sidebar.component';
import UserHeader from '../UserHeader/UserHeader.component';
import { Container } from './styled';

function UserHomeLayout({ children }) {
    return (
        <Container>
            <UserHeader></UserHeader>
            <Sidebar></Sidebar>
            {children}
        </Container>
    );
}

export default UserHomeLayout;
