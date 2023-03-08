import styled from 'styled-components';

export const LoginStyle = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .bg-dark-secondary {
        background: #01091d;
    }
    .bc-primary {
        border: 0.3em solid #00e7aa;
    }
    #login-btn {
        border: 1px solid #00e7aa;
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.08))
            drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
        border-radius: 2px;
        background: #01091d;
        color: white;
        width: 12em;
        height: 2em;
    }
    .signUp-btn {
        background: linear-gradient(
            90deg,
            #00513c 0%,
            #00e7aa 22.08%,
            #00e7aa 72.07%,
            #00513c 100%
        );
        border: 2px solid #05d09a;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        color: white;
        width: 12em;
        height: 2em;
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
        left: 37%;
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
        top: 25%;
    }
    .top-28 {
        top: 28%;
    }
    .top-30 {
        top: 30%;
    }
    .bottom-23 {
        bottom: 23%;
    }
    .bottom-27 {
        bottom: 27%;
    }
    .bottom-18 {
        bottom: 18%;
    }
    .bottom-15 {
        bottom: 13%;
    }
    .bottom-5 {
        bottom: 5%;
    }
    .end-1 {
        right: 1.5%;
    }
    .end-2 {
        right: 12%;
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
        transform: matrix(0.93, 0.36, -0.36, 0.93, 0, 0);
    }
    .rotate-1 {
        transform: matrix(0.91, -0.42, 0.42, 0.91, 0, 0);
    }
    .rotate-3 {
        transform: matrix(0.92, 0.39, -0.38, 0.92, 0, 0);
    }
    .rotate-4 {
        transform: matrix(0.96, -0.28, 0.27, 0.96, 0, 0);
    }
`;

export const LoginBtn = styled.div`
    border: 1px solid #00e7aa;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.08))
        drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    border-radius: 2px;
`;
