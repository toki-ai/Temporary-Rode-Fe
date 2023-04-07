import styled from 'styled-components';

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
`;
