import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.div`
    background-color: ${themes.colors.dark};
    height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media ${device.tablet} {
        height: calc(100vh - 50px - 1rem);
    }
    @media ${device.laptop} {
        height: calc(100vh - 60px - 1rem);
    }

    @media ${device.laptopL} {
        height: calc(100vh - 70px - 1rem);
    }

    @media ${device.desktop} {
        height: calc(100vh - 100px - 1rem);
    }
`;
