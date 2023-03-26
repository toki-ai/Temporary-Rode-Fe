import styled from 'styled-components';

import { device } from '../../utils/Breakpoints';

export const UserContainer = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 100%;
    /* background-color: aqua; */
    @media ${device.tablet} {
        width: calc(100% - 300px);
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
