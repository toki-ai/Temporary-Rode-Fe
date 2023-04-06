import { Table } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

import Pagination from 'react-bootstrap/Pagination';

export const Container = styled.div`
    position: relative;
`;
export const Box = styled.div`
    /* Background */

    background: #01091d;
    /* button */

    border: 2px solid #00e7aa;
    box-shadow: 0px 0px 13px #00c994;
    border-radius: 19.699px;

    @media ${device.tablet} {
        width: 450px;
        height: 350px;
    }
    @media ${device.laptop} {
        width: 646px;
        height: 410px;
    }

    @media ${device.laptopL} {
        width: 1000px;
        height: 480px;
    }

    @media ${device.desktop} {
        width: 1800px;
        height: 760px;
    }
`;
export const Background = styled.img`
    /* width: 100%;
    height: 482px; */
    overflow: hidden;
    /* background-size: 100% 100%; */
    width: 100%;
    height: 100%;
    z-index: 2;
`;

export const Input = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .form {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -35%;
        right: 0;
    }
    .inputRoomCode {
        width: 400px;
        padding: 8px;
        padding-left: 20px;
    }
    .inputRoomCode:focus {
        outline: none;
    }
    .bg-dark-secondary {
        background: ${themes.colors.primary5};
    }
    .bc-primary {
        border: 0.1em solid #00e7aa;
    }
    .box-shadow-primary {
        box-shadow: 0px 2px 15px #00c994;
    }
    .label {
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
    }
    .text-yellow {
        color: #f9c41c;
    }
    .radius-15 {
        border-radius: 15px;
    }
    .inputSearchRoom {
        width: 300px;
        padding: 4px;
        padding-left: 60px;
    }
    @media ${device.tablet} {
        .form {
            top: -35%;
            right: 0;
        }
        .inputRoomCode {
            width: 200px;
            padding: 4px;
            padding-left: 20px;
        }
        .label {
            font-size: 25px;
        }
    }
    @media ${device.laptop} {
        .form {
            top: -30%;
            right: 0;
        }
        .inputRoomCode {
            width: 250px;
            padding: 4px;
            padding-left: 20px;
        }
        .label {
            font-size: 25px;
        }
    }

    @media ${device.laptopL} {
        .form {
            top: -35%;
            right: 0;
        }
        .inputRoomCode {
            width: 400px;
            padding: 8px;
            padding-left: 20px;
        }
        .label {
            font-size: 45px;
        }
    }

    @media ${device.desktop} {
        .form {
            top: -35%;
            right: 0;
        }
        .inputRoomCode {
            width: 600px;
            padding: 16px;
            padding-left: 20px;
        }
        .label {
            font-size: 55px;
        }
    }
`;
export const Hero = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: 0.2em;
    color: ${themes.colors.primary};

    @media ${device.tablet} {
        font-size: 50px;
    }
    @media ${device.laptop} {
        font-size: 45px;
        line-height: 50px;
    }

    @media ${device.laptopL} {
        font-size: 64px;
    }

    @media ${device.desktop} {
        font-size: 100px;
        line-height: 100px;
    }
`;

export const Title = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: 0.26em;

    /* header */
    font-family: var(--bs-body-font-family);
    -webkit-text-stroke-width: 0.03em;
    -webkit-text-stroke-color: ${themes.colors.light};
    margin-left: 138px;
    @media ${device.tablet} {
        font-size: 50px;
    }
    @media ${device.laptop} {
        font-size: 45px;
        line-height: 50px;
        margin-left: 100px;
    }

    @media ${device.laptopL} {
        font-size: 64px;
        line-height: 80px;
        margin-left: 138px;
    }

    @media ${device.desktop} {
        font-size: 100px;
        line-height: 100px;
        margin-left: 200px;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -35%;
    @media ${device.tablet} {
        top: -35%;
    }
    @media ${device.laptop} {
        top: -35%;
    }

    @media ${device.laptopL} {
        top: -35%;
    }

    @media ${device.desktop} {
        top: -35%;
    }
`;

export const Icon = styled.div`
    .position-absolute {
        position: absolute;
    }
    .right-50 {
        right: 50%;
    }
    .right-2 {
        right: -2%;
    }
    .right-0 {
        right: 0;
    }
    .right-102 {
        right: 102%;
    }
    .right-9 {
        right: 9%;
    }
    .right-14 {
        right: 14%;
    }
    .right-18 {
        right: 18%;
    }
    .right-32 {
        right: 32%;
    }
    .right-60 {
        right: 60%;
    }
    .right-65 {
        right: 65%;
    }
    .right-78 {
        right: 78%;
    }
    .right-90 {
        right: 90%;
    }
    .h-18 {
        height: 18px;
    }
    .w-22em {
        width: 2.2em;
    }
    .w-3em {
        width: 3em;
    }
    .w-4em {
        width: 4em;
    }
    .w-9em {
        width: 9em;
    }
    .bottom-80 {
        bottom: 80%;
    }
    .bottom-100 {
        bottom: 100%;
    }
    .bottom-105 {
        bottom: 105%;
    }
    .bottom-120 {
        bottom: 120%;
    }
    .bottom-124 {
        bottom: 124%;
    }
    .bottom-128 {
        bottom: 128%;
    }
    .bottom-134 {
        bottom: 134%;
    }
    .bottom-142 {
        bottom: 142%;
    }
    .rotate-1 {
        transform: rotate(-169deg);
    }
`;

export const Text = styled.div`
    position: absolute;
    top: 8%;
    left: 5%;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 14px;

    color: ${themes.colors.primary};
`;
export const SearchBox = styled.div`
    display: flex;
    position: absolute;
    top: 16%;
    left: 5%;
`;
export const SearchIcon = styled(Search)`
    color: ${themes.colors.light};
    position: absolute;
    left: 5%;
    top: 32%;
    cursor: pointer;
`;

export const Type = styled.div`
    display: flex;
    align-items: center;
    div {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        margin-right: 1em;
        /* identical to box height */

        color: ${themes.colors.primary};
    }
    a {
        color: ${themes.colors.light};
    }
    position: absolute;
    top: 15%;
    right: 10%;
    .bg {
        background: #020d26;
    }
    .border {
        border: 1px solid ${themes.colors.primary} !important;
    }
    .w-150 {
        width: 150px;
    }
    .transform {
        transform: translate3d(0px, 50px, 0px) !important;
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
`;

export const RTable = styled(Table)`
    position: absolute;
    top: 30%;
    width: 925px;
    color: white;

    td,
    tr {
        align-items: center;
        color: white;
        background-color: ${themes.colors.primary5};
    }
    tr {
        border: 2px solid ${themes.colors.primary};
    }
    tr:hover {
        background-color: ${themes.colors.primary};
    }
    td:hover {
        background-color: ${themes.colors.primary};
    }
    th {
        background-color: ${themes.colors.primary5};
    }
    .table-hover tbody tr:hover {
        background-color: #f5f5f5;
        color: #333;
    }
`;
export const MyTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyPagination = styled(Pagination)`
    position: absolute;
    bottom: 0%;
    left: 40%;
    border: 0px;
    /* background-color: ${themes.colors.primary5} !important; */
    a {
        background-color: transparent !important;
        color: ${themes.colors.light};
        border: none;
    }
    a:hover {
        color: ${themes.colors.primary};
    }
    li.active span {
        background-color: transparent !important;
        border: 1px solid ${themes.colors.primary}!important;
    }
`;
// export const MyPagination = styled.div`
//     border: 0px;

//     .position-absolute {
//         position: absolute;
//     }
//     .bg-color {
//         background-color: ${themes.colors.primary5} !important;
//     }
//     .bottom-0 {
//         bottom: 0%;
//     }
//     .left-0 {
//         left: 40%;
//     }
//     .pagination {
//         background-color: ${themes.colors.primary5} !important;
//     }
// `;
