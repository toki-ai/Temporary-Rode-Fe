import { useContext } from 'react';

import { UserContext } from '../../Context/User.context';
import logo from '../../assets/Header/logo.svg';
import { formatUserName } from '../../utils/helper';
import { Container, Hero, Left, Right } from './styled';

function UserHeader() {
    const { currentUser } = useContext(UserContext);

    return (
        <Container>
            <Left to="/">
                <img src={logo} alt="Logo SVG" />
                <Hero>R.ode battle</Hero>
            </Left>
            <Right>
                <Hero>
                    {currentUser != null
                        ? formatUserName(currentUser.firstName, currentUser.lastName) +
                          ' - ' +
                          currentUser.studentId
                        : ''}
                </Hero>
            </Right>
        </Container>
    );
}

export default UserHeader;
