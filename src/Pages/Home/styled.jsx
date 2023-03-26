import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        height: calc(100vh - 50px);
    }
    @media ${device.laptop} {
        height: calc(100vh - 60px);
    }

    @media ${device.laptopL} {
        width: 956px;
        height: 603px;
    }

    @media ${device.desktop} {
        height: calc(100vh - 100px);
    }
`;
export const Background = styled.div`
    width: 956px;
    height: 603px;
    position: relative;
    overflow: hidden;
    background-image: ${({ url }) => (url ? `url(${url})` : null)};
    /* background-size: 100% 100%; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Hero = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 0.2em;
    color: ${themes.colors.primary};
    position: absolute;
    top: 23%;
    left: 26%;
    /* @media ${device.tablet} {
        width: 764px;
        height: 544px;
    }
    @media ${device.laptop} {
        width: 764px;
        height: 544px;
    }

    @media ${device.laptopL} {
        width: 916px;
        height: 652px;
    }

    @media ${device.desktop} {
        width: 1146px;
        height: 816px;
    } */
`;

export const Title = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 0.26em;

    /* header */
    font-family: var(--bs-body-font-family);
    -webkit-text-stroke-width: 0.03em;
    -webkit-text-stroke-color: ${themes.colors.light};
    position: absolute;
    top: 40%;
    left: 40%;
    /* @media ${device.tablet} {
        width: 764px;
        height: 544px;
    }
    @media ${device.laptop} {
        width: 764px;
        height: 544px;
    }

    @media ${device.laptopL} {
        width: 916px;
        height: 652px;
    }

    @media ${device.desktop} {
        width: 1146px;
        height: 816px;
    } */
`;
