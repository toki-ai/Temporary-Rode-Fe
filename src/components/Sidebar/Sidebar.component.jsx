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
    AdminBtn,
    LogOutBtn,
} from './styled';

const infoItems = [
    {
        icon: <IconPerson />,
        Info: 'Contestant',
        Action: '/contestant',
    },
    {
        icon: <i class="bi bi-door-open"></i>,
        Info: 'Room',
        Action: '/admin/room',
    },
    {
        icon: <IconBarChart />,
        Info: 'Leaderboard',
        Action: '/admin/leaderboard',
    },
    {
        icon: <IconFile />,
        Info: 'Content',
        Action: '/admin/content',
    },
];

const endItems = [
    {
        icon: <IconChat />,
        Info: 'Feedback',
        Action: '/admin/feedback',
    },
    {
        icon: <i class="bi bi-gear"></i>,
        Info: 'Settings',
        Action: '/admin/settings',
    },
];
//   {
//         icon: <IconLogOut />,
//         Info: 'Log out',
//         Action: '/login',
//     },
function Sidebar() {
    return (
        <>
            <Container>
                <User>
                    <IconUser></IconUser>

                    <p>Administrator</p>
                </User>
                <Pagination>
                    <General>
                        <BoldText>General</BoldText>
                        <nav>
                            <AdminBtn to="/admin/dashboard">
                                <IconHouse />
                                Dashboard
                            </AdminBtn>
                        </nav>
                    </General>
                    <ContestInfo>
                        <BoldText>Contest Information</BoldText>
                        <AdminEndBar>
                            <nav>
                                {infoItems.map((el) => {
                                    return (
                                        <AdminBtn to={el.Action} key={el.Info}>
                                            {el.icon}
                                            {el.Info}
                                        </AdminBtn>
                                    );
                                })}
                            </nav>
                        </AdminEndBar>
                    </ContestInfo>
                    <ContestInfo>
                        <BoldText>Others</BoldText>
                        <AdminEndBar>
                            <nav>
                                {endItems.map((el) => {
                                    return (
                                        <AdminBtn to={el.Action} key={el.Info}>
                                            {el.icon}
                                            {el.Info}
                                        </AdminBtn>
                                    );
                                })}
                                <LogOutBtn to={'/login'} onClick={() => localStorage.clear()}>
                                    <IconLogOut /> Log out
                                </LogOutBtn>
                            </nav>
                        </AdminEndBar>
                    </ContestInfo>
                </Pagination>
            </Container>
        </>
    );
}

export default Sidebar;
