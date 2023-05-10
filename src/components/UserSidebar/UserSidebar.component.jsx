import { useContext, useEffect, useState } from 'react';

import ContentNav from '../../ContentNav/ContentNav.jsx';
import { UserEndBar } from '../../ContentNav/UserContentNav.styled.jsx';
import { UserContext } from '../../Context/User.context.jsx';
import { formatUserName } from '../../utils/helper.js';
import {
    BoldText,
    Container,
    ContestInfo,
    General,
    IconChat,
    IconHouse,
    IconLogOut,
    IconUser,
    Pagination,
    User,
} from './styled.jsx';

function UserSidebar() {
    const generalItems = [
        {
            icon: <IconHouse />,
            Info: 'Dashboard',
            Action: '/dashboard',
        },
    ];
    const infoItems = [
        {
            icon: <IconHouse />,
            Info: 'Home',
            Action: '/',
        },
    ];

    const endItems = [
        {
            icon: <IconChat />,
            Info: 'Feedback',
            Action: './feedback',
        },
        {
            icon: <IconLogOut />,
            Info: 'Log out',
            Action: '/login',
        },
    ];

    const { currentUser } = useContext(UserContext);

    return (
        <>
            <Container>
                <User>
                    <IconUser></IconUser>
                    <div>
                        {currentUser != null
                            ? formatUserName(currentUser.firstName, currentUser.lastName)
                            : ''}
                    </div>
                    <p>{currentUser != null ? currentUser.studentId : ''}</p>
                </User>
                <Pagination>
                    <General>
                        <BoldText>General</BoldText>
                        <div>
                            <ContentNav items={generalItems} layout={2} />
                        </div>
                    </General>
                    <ContestInfo>
                        <BoldText>Contest Information</BoldText>
                        <UserEndBar>
                            <nav>
                                <ContentNav items={infoItems} layout={2} />
                            </nav>
                            <nav>
                                <ContentNav items={endItems} layout={2} />
                            </nav>
                        </UserEndBar>
                    </ContestInfo>
                </Pagination>
            </Container>
        </>
    );
}

export default UserSidebar;
