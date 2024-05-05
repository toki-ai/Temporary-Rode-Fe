import styled from 'styled-components';

import { themes } from '../../themes';

export const Wrap = styled.div`
    display: flex;
    justify-content: center;

    .btn-base {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 20px;
        font-size: 14px;
        max-width: 10rem;
        gap: 10px;
        background: linear-gradient(90deg, #00e7aa 0.05%, #00513c -5%);
        color: ${(props) => props.theme.colors.light};
        border: 2px solid #00e7aa;
        border-radius: 42px;
        width: 11rem;
        transition: all 0.4s ease-in-out;
        &:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
            background: linear-gradient(90deg, ${themes.colors.primary} 2.05%, #00513c 100%);
        }
        @media all and (max-width: 1200px) {
            font-size: 12px;
            width: 8rem;
            padding: 10px;
        }
    }
    .btn-news {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        border: 2px solid #00e7aa;
        border-radius: 10px;
    }
    .btn-solid {
        display: inline-flex;
        background-color: ${themes.colors.primary};
    }

    .btn-outline {
        border: 2px solid ${themes.colors.primary};
        width: 100%;
        color: ${themes.colors.primary};
        text-wrap: nowrap;
        &:hover,
        &:focus,
        &:active {
            background-color: ${themes.colors.primary};
            color: ${themes.colors.light};
        }
    }
    .btn-outline2 {
        border: 2px solid ${themes.colors.primary};
        width: 100%;
        color: ${themes.colors.light};
        background: rgba(0, 231, 170, 0.75);

        &:hover,
        &:focus,
        &:active {
            background-color: ${themes.colors.primary};
            color: ${themes.colors.light};
        }
    }
    .btn-dashed {
        border: 2px dashed ${themes.colors.primary};
        width: 100%;
        color: ${themes.colors.primary};

        &:hover {
            background-color: ${themes.colors.primary};
            color: ${themes.colors.light};
        }
    }

    .btn-inverted {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        color: #007dff;
        background: ${(props) => props.theme.colors.light};
        border-radius: 42px;
        width: 133px;
    }
    .btn-borderNeon {
        color: ${(props) => props.theme.colors.light};
        border: 2px solid #00e7aa;
        /* shadow */

        filter: drop-shadow(0px 2px 15px #00c994);
        border-radius: 10px;
        &:hover {
            transition: all 0.4s ease-out;
            color: ${(props) => props.theme.colors.neonLine};
            background: ${(props) => props.theme.colors.light};
        }
    }
`;
