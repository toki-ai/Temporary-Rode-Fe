import styled from 'styled-components';

import { themes } from '../themes';
import { device } from '../utils/Breakpoints';

export const UserItem = styled.div`
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        a {
            color: ${themes.colors.primary1};
        }
        section {
            color: ${themes.colors.primary1};
        }
    }

    &:active {
        a {
            color: ${themes.colors.primary1};
        }
        section {
            color: ${themes.colors.primary1};
        }
    }
`;

export const UserText = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 21px;
    color: ${themes.colors.light};
    cursor: pointer;
    transition: 0.3s;
`;

export const UserIcon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${themes.colors.light};
`;

export const UserEndBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 14px;
        cursor: pointer;
    }
    .t2 {
        display: flex;
        align-items: center;
        justify-content: center;
        & > section:hover {
            transition: ease-in all 0.2s;
            color: ${themes.colors.primary1};
        }

        & > div:hover {
            a {
                transition: ease-in all 0.2s;
                color: ${themes.colors.primary1};
            }
        }
    }
    nav:last-child {
        color: red;
        /* a {
            color: red;
        }
        div:first-child {
            a {
                color: ${themes.colors.light};
            }
        } */
        div:hover {
            /* a {
                transition: ease-in all 0.2s;
                color: ${themes.colors.primary1};
            } */
        }
    }
`;
