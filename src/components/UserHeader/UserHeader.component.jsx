import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../Context/User.context';
import logo from '../../assets/Header/logo.svg';
import Localstorage from '../../utils/Localstorage';
import { formatUserName } from '../../utils/helper';
import { Container, Hero, Left, Right, Center, NavStyled } from './styled';

function UserHeader() {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
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

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-box-arrow-right biStyled"
                    viewBox="0 0 16 16"
                    onClick={() => {
                        Localstorage.clear();
                        navigate('/login');
                    }}
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                </svg>
            </Right>
        </Container>
    );
}

export default UserHeader;
// <Center>
//     <NavStyled to="/home">HomePage</NavStyled>
//     <NavStyled to="/dashboard">DashBoard</NavStyled>
// </Center>;
