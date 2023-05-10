import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

export const AlgorithmWrapper = styled.div`
    padding-bottom: 20px;
    height: 100%;
    .p-0 {
        padding: 0px;
    }

    .h-100 {
        height: 100%;
    }
    .m-y-20 {
        margin: 20px 0;
    }
    .border-tran {
        border-top-color: transparent;
        border-bottom-color: transparent;
    }
    .bg-blue {
        background-color: #020d26;
    }
`;

export const AlgorithmNav = styled(Nav)`
    height: 100%;
    /* padding: 200px 0; */
    /* background-color: transparent; */
    /* padding: 0; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-item: center;
    .active {
        border-color: #00e7aa;
        border-right-color: transparent;
    }

    .active-border::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 100px;
        weight: 100px;
        background-color: red;
    }
`;

export const AlgorithmContent = styled.div`
    height: 100%;
    background-color: transparent;
    height: 90vh;
    border-radius: 10px;
    border: 1px solid #00e7aa;
    /* padding: 0; */
    overflow: hidden;
`;

export const AlgorithmNavItem = styled(Nav.Link)`
    /* height: 90%; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #2e7dff;
    border-radius: 8px 0 0 8px;
    border-right-color: transparent;
    width: 5rem;
    .algorithm-nav-title {
        margin: 0;
        padding: 0;

        transform: rotate(-90deg);
        font-weight: 600;

        letter-spacing: 0.457143px;
        text-transform: uppercase;
    }
    @media screen and (max-width: 570px) {
        gap: 20px;
        .algorithm-nav-title {
            font-size: 14px;
            transform: rotate(0deg);
        }
    }
`;

///////////////NEw tabs layout//////////////////////
// need and active state for animations
export const Tabs = styled.div`
    & .tabs {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 350px;
        background-color: #eee;
        overflow: hidden;
        box-shadow: 2px 2px 5px 2px #ccc;
        display: flex;
    }
    & .tab-header {
        width: 150px;
        & > div {
            width: 100%;
            height: calc(100% / 4);
            background: #ddd;
            text-indent: 20px;
            color: #888;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            border-left: 5px solid #ddd;
            &.active {
                border-left: 5px solid #00acee;
                color: #00acee;
                background: #eee;
            }
        }
    }

    & .tab-content {
        padding: 20px 30px;
        position: relative;
        flex: 1;
        & > div {
            position: absolute;
            top: -50vh;
            left: 100px;
            opacity: 0;
            &.active {
                top: 20px;
                left: 20px;
                opacity: 1;
            }
        }
    }
`;

export const TabPane = styled(Tab.Pane)`
    transform: none !important;
    width: 100% !important;
`;
//DraggableLine//

export const WrapperStyle = styled.div`
    height: 100%;
    background-color: ${(props) => props.theme.colors.arenaBG};
    .app {
        display: flex;
        height: 100%;
    }

    .left-section,
    .right-section {
        height: 100%;
    }

    .left-section {
        /* background-color: lightblue; */
        overflow: hidden;
    }

    .separator {
        width: 10px;
        background-color: gray;
        cursor: col-resize;
    }

    .right-section {
        flex-grow: 1;
        /* background-color: lightgreen; */
        overflow: hidden;
    }
    .remind {
        display: flex;
        justify-content: center;
        align-items: center;
        color: pink;
        white-space: wrap;
        text-align: center;
        padding: 20px;
        margin: 200px 20px;
        font-style: italic;
        box-shadow: 0 0 5px 2px;
        border: 2px dashed yellow;
    }
`;
export const BoxEditor = styled.div`
    width: 100%;
    display: inline-block;
    /* height: calc(100vh - 290px); 

    color: ${(props) => props.theme.colors.light};
    /* padding: 10px 20px; */
    /* background-color: ${(props) => props.theme.colors.arenaBG}; */
    /* border: 1px solid #00e7aa; */
    /* box-shadow: 0px 2px 15px #00c994; */
    border-radius: 10px;
    overflow: hidden;
    max-height: ${(props) => (props.maxHeight ? `40vh` : `100%`)};
    transition: all 0.4s ease-in;
    .ͼo {
        background-color: transparent;
        & .cm-gutters {
            background-color: transparent;
        }
    }
`;
export const TimeText = styled.span`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.457143px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: #ffffff;
`;
export const ChooseQWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-right: 1em;
    a {
        color: ${themes.colors.light};
    }

    .bg {
        background: #020d26;
    }
    .border {
        border: 1px solid ${themes.colors.primary} !important;
    }
    /* .w-150 {
        width: 150px;
    } */
    .dd-100 {
        width: 150px;
    }
    .transform {
        transform: translate3d(0px, 50px, 0px);
    }
    .dropdown-item:hover,
    .dropdown-item:focus {
        background-color: ${themes.colors.primary};
    }
    .button {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu {
        width: 100%;
    }
    @media ${device.laptop} {
        div {
            font-size: 15px;

            /* identical to box height */

            color: ${themes.colors.primary};
        }
        /* .head {
            width: 100px;
        } */
        .menu {
            width: 100px;
        }

        .transform {
            transform: translate3d(-59px, 50px, 0px) !important;
        }
    }

    @media ${device.laptopL} {
        div {
            font-size: 18px;

            color: ${themes.colors.primary};
        }
        /* .head {
            width: 150px;
        } */
        .menu {
            width: 150px;
        }
        .transform {
            transform: translate3d(0px, 50px, 0px) !important;
        }
    }

    @media ${device.desktop} {
        div {
            font-size: 36px;

            color: ${themes.colors.primary};
        }

        .transform {
            transform: translate3d(0px, 60px, 0px) !important;
        }

        .head {
            width: 300px;
            height: 50px;
            font-size: 28px;
        }
        .menu {
            height: 150px;
            width: 300px;
            font-size: 28px;
        }
        a {
            padding-bottom: 20px;
        }
    }
`;
export const WrapRightSection = styled.div`
    max-height: 100%;
    .text-red {
        border-color: red !important;
        color: red;
    }

    /* overflow-y: scroll; */
`;
