import React from 'react';

import ContentNav from './ContentNav';
import {
    Container,
    General,
    IconUser,
    User,
    Text,
    IconHouse,
    Pagination,
    BoldText,
    Icon,
    IconPerson,
    IconFile,
    IconChat,
    IconLogOut,
    ContestInfo,
    IconBarChart,
    EndBar,
} from './styled';

const generalItems = [
    {
        icon: <IconHouse />,
        Info: 'Dashboard',
        Action: './dashboard',
    },
];
const infoItems = [
    {
        icon: <IconPerson />,
        Info: 'Contestant',
        Action: './contestant',
    },
    {
        icon: <IconHouse />,
        Info: 'Room',
        Action: './room',
    },
    {
        icon: <IconBarChart />,
        Info: 'Leaderboard',
        Action: './leaderboard',
    },
    {
        icon: <IconFile />,
        Info: 'Content',
        Action: './content',
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
function Sidebar() {
    return (
        <>
            <Container>
                <User>
                    <IconUser></IconUser>
                    <div>Lê Thành Long</div>
                    <p>Administrator</p>
                </User>
                <Pagination>
                    <General>
                        <BoldText>General</BoldText>
                        <div>
                            <ContentNav items={generalItems} />
                        </div>
                    </General>
                    <ContestInfo>
                        <BoldText>Contest Information</BoldText>
                        <EndBar>
                            <nav>
                                <ContentNav items={infoItems} />
                            </nav>
                            <nav>
                                <ContentNav items={endItems} />
                            </nav>
                        </EndBar>
                    </ContestInfo>
                </Pagination>
            </Container>
        </>
    );
}

export default Sidebar;
