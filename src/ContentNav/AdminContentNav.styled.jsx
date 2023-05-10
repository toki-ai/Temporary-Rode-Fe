import styled from 'styled-components';

import { themes } from '../themes';
import { device } from '../utils/Breakpoints';

export const AdminText = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 21px;
    color: #515151;
    cursor: pointer;
    transition: 0.3s;
`;

export const AdminIcon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
`;

export const AdminItem = styled.div`
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        a {
            color: ${themes.colors.primary};
        }
        section {
            color: ${themes.colors.primary};
        }
    }
`;

export const AdminEndBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 14px;
    height: 100%;
    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 14px;
        cursor: pointer;
    }

    nav:last-child {
        color: red;
        a {
            color: red;
        }
        div:first-child {
            color: #111111;
            a {
                color: #111111;
            }
        }
        div:hover {
            a {
                color: ${themes.colors.primary};
            }
        }
    }
`;
