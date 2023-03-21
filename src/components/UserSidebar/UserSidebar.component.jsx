import { useEffect, useState } from 'react';

import ContentNav from '../../ContentNav/ContentNav.jsx';
import { UserEndBar } from '../../ContentNav/UserContentNav.styled.jsx';
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
            Action: './dashboard',
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
            Action: '/',
        },
    ];

    return (
        <>
            <Container>
                <User>
                    <IconUser></IconUser>
                    <div>Lê Thành Long</div>
                    <p>SE172125</p>
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
