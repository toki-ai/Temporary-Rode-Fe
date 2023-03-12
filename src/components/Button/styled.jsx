import styled from 'styled-components';

export const Wrap = styled.span`
    display: flex;
    justify-content: center;

    .btn-base {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        background: linear-gradient(90deg, #00e7aa 0.05%, #00513c -5%);
        color: #fff;
        border: 2px solid #00e7aa;
        border-radius: 42px;
        width: 233px;

        &:hover {
            transition: all 0.4s ease-out;
            background: linear-gradient(90deg, #00e7aa 2.05%, #00513c 100%);
        }
    }

    .btn-inverted {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        color: #007dff;
        background: #ffffff;
        border-radius: 42px;
        width: 133px;
    }
    .btn-borderNeon {
        color: #fff;
        border: 2px solid #00e7aa;
        /* shadow */

        filter: drop-shadow(0px 2px 15px #00c994);
        border-radius: 21px;
    }
`;
