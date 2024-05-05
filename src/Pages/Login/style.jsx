import styled from 'styled-components';

import BgAnimate from '../../assets/Login/BgAnimate.png';
import { moveInCircle, Rotate, Floating, BgScrolling, TextEffect } from '../../constant/keyframes';

export const LoginStyle = styled.div`
    min-height: 90vh;
    display: flex;
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    .BgScrolling {
        width: 100%;
        height: 100%;
        overflow: hidden;
        /* border: 12px solid #fff; */
        background-image: ${`url(${BgAnimate})`};
        background-size: 120%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        animation: ${BgScrolling} 12s alternate-reverse infinite both;
    }
    .bg-dark-secondary {
        background: #01091d;
    }
    .bc-primary {
        border: 0.3em solid #00e7aa;
    }
    .box-shadow-primary {
        box-shadow: 10px 29px 184px -14px #01e2a6;
    }
    .color-primary {
        color: #00e7aa;
    }
    .color-secondary {
        color: #2e7dff;
    }
    .color-third {
        color: #45ce7b;
    }
    .ls-1 {
        letter-spacing: 0.4em;
    }
    .ls-2 {
        letter-spacing: 0.26em;
    }
    .text-stroke-1 {
        font-family: var(--bs-body-font-family);
        color: #323232;
        -webkit-text-stroke-width: 0.03em;
        -webkit-text-stroke-color: white;
    }

    .si-1 {
        width: 3.8em;
        height: 3.8em;
    }
    .si-2 {
        width: 5em;
        height: 5em;
    }
    .si-3 {
        width: 1.8em;
        height: 1.8em;
    }
    .si-4 {
        width: 3.2em;
        height: 3.2em;
    }
    .fs-0 {
        font-size: 2.6em;
    }
    .w-80 {
        width: 80%;
    }
    .h-80 {
        height: 80%;
    }
    .left-1 {
        left: 8%;
    }
    .left-2 {
        left: 18%;
    }
    .left-3 {
        left: 30%;
    }
    .left-4 {
        left: 33%;
    }
    .left-5 {
        left: 22%;
    }
    .top-5 {
        top: 5%;
    }
    .top-10 {
        top: 10%;
    }
    .top-18 {
        top: 18%;
    }
    .top-25 {
        animation: ${Floating} 10s linear infinite;

        top: 25%;
    }
    .top-28 {
        animation: ${moveInCircle} 20s linear infinite;
        top: 28%;
    }
    .top-30 {
        animation: ${Floating} 13s linear infinite;

        top: 30%;
    }
    .bottom-23 {
        bottom: 23%;
    }
    .bottom-25 {
        bottom: 25%;
    }
    .bottom-24 {
        bottom: 24%;
    }
    .bottom-15 {
        bottom: 15%;
    }
    .bottom-13 {
        bottom: 13%;
    }
    .bottom-5 {
        bottom: 5%;
    }
    .end-1 {
        right: 1.2%;
    }
    .end-2 {
        right: 8%;
    }
    .end-3 {
        right: 27%;
    }
    .end-4 {
        right: 40%;
    }
    .end-5 {
        right: 35%;
    }
    .rotate-2 {
        animation: ${Rotate} 4s linear infinite;
        transform: matrix(0.93, 0.36, -0.36, 0.93, 0, 0);
    }
    .rotate-1 {
        animation: ${Rotate} 10s linear infinite;
        transform: matrix(0.91, -0.42, 0.42, 0.91, 0, 0);
    }
    .rotate-3 {
        animation: ${Rotate} 6s linear infinite;
        transform: matrix(0.92, 0.39, -0.38, 0.92, 0, 0);
    }
    .rotate-4 {
        animation: ${Rotate} 7s linear infinite;
        transform: matrix(0.96, -0.28, 0.27, 0.96, 0, 0);
    }

    /* Text Effect */
    .text-effect {
        animation: ${TextEffect} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s both;
    }
`;
