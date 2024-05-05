import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.header`
    border-bottom: 0.711111px solid ${themes.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    /* margin-bottom: 1rem; */
    @media ${device.tablet} {
        height: 50px;
    }
    @media ${device.laptop} {
        height: 60px;
    }

    @media ${device.laptopL} {
        height: 70px;
    }

    @media ${device.desktop} {
        height: 100px;
    }
`;

export const Left = styled(Link)`
    padding: 0rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`;

export const Right = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    & .biStyled {
        color: ${themes.colors.neonLine};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: ${themes.colors.red2};
        }
    }
`;

export const Hero = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;

    line-height: 35px;

    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: uppercase;
    color: ${themes.colors.primary};

    @media ${device.tablet} {
        font-size: 16px;
    }
    @media ${device.laptop} {
        font-size: 20px;
    }
    @media ${device.laptopL} {
        font-size: 22px;
    }
    @media ${device.desktop} {
        font-size: 24px;
    }
`;
export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;
export const NavStyled = styled(NavLink)`
    color: ${themes.colors.light};

    transition: all 0.4s ease;

    &:hover {
        color: ${themes.colors.neonLine};
        &.active::after {
            border-bottom: 3px solid ${themes.colors.neonLine};
        }
    }
    &.active::after {
        content: '';
        /* width: 100px;
        height: auto; */
        /* max-height: 10px; */
        position: relative;
        right: 4rem;
        padding: 3px 24px;
        transition: all 0.4s ease;
        border-bottom: 3px solid ${themes.colors.light};
    }
`;
