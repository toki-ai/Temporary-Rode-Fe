import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.div`
    background-color: ${themes.colors.dark};
    height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
        height: calc(100vh - 50px - 1rem);
        margin-top: 6rem;
    }
    @media ${device.laptop} {
        height: calc(100vh - 60px - 1rem);
        /* margin-top: 4rem; */
    }

    @media ${device.laptopL} {
        height: calc(100vh - 60px - 1rem);
        margin-top: 0;
    }

    @media ${device.desktop} {
        height: calc(100vh - 100px - 1rem);
        margin-top: 0;
    }
`;
