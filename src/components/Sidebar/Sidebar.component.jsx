import React from 'react';

import { AdminEndBar } from '../../ContentNav/AdminContentNav.styled';
import ContentNav from '../../ContentNav/ContentNav';
import {
    Container,
    General,
    IconUser,
    User,
    IconHouse,
    Pagination,
    BoldText,
    IconPerson,
    IconFile,
    IconChat,
    IconLogOut,
    ContestInfo,
    IconBarChart,
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
                    <div className="mb-1">Lê Thành Long</div>
                    <p>Administrator</p>
                </User>
                <Pagination>
                    <General>
                        <BoldText>General</BoldText>
                        <div>
                            <ContentNav items={generalItems} layout={1} />
                        </div>
                    </General>
                    <ContestInfo>
                        <BoldText>Contest Information</BoldText>
                        <AdminEndBar>
                            <nav>
                                <ContentNav items={infoItems} layout={1} />
                            </nav>
                            <nav>
                                <ContentNav items={endItems} layout={1} />
                            </nav>
                        </AdminEndBar>
                    </ContestInfo>
                </Pagination>
            </Container>
        </>
    );
}

export default Sidebar;
