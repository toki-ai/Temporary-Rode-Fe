import styled from 'styled-components';

import { device } from '../../utils/Breakpoints';

export const UserContainer = styled.div`
    /* width: 100%; */
    /* min-height: 100vh; */
    display: flex;
    padding: 5rem 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    /* background-color: aqua; */
    @media ${device.tablet} {
        width: calc(100% - 300px);
        padding: 3rem 0.5rem;
        height: 60%;
    }
    @media ${device.laptop} {
        width: calc(100% - 300px);
    }

    @media ${device.laptopL} {
        width: calc(100% - 300px);
    }

    @media ${device.desktop} {
        width: calc(100% - 300px);
    }
`;
