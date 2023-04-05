import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

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

export const AlgorithmNav = styled.div`
    height: 100%;
    padding: 200px 0;
    background-color: transparent;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    .active-border {
        border-color: #00e7aa;
        border-right-color: transparent;
        position: relative;
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
    padding: 0 -20px;
`;

export const AlgorithmNavItem = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #2e7dff;
    border-radius: 8px 0 0 8px;
    border-right-color: transparent;

    .algorithm-nav-title {
        margin: 0;
        padding: 0;
        font-weight: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.457143px;
        text-transform: uppercase;
        color: #2e7dff;
        word-break: break-word;
        width: 100%;
    }
`;
