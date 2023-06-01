import { Table } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

import Pagination from 'react-bootstrap/Pagination';

export const Container = styled.div`
    position: relative;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Background */
    background: #01091d;

    /* button */
    border: 2px solid #00e7aa;
    box-shadow: 0px 0px 13px #00c994;
    border-radius: 19.699px;
    background-image: ${({ url }) => (url ? `url(${url})` : null)};
    /* background-size: 100% 100%; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${device.tablet} {
        width: 570px;
        height: 380px;
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
    transition: all 0.3s ease;
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
            top: -30%;
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
        .inputSearchRoom {
            width: 240px;
            padding: 2px;
            padding-left: 50px;
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
        .inputSearchRoom {
            width: 250px;
            padding: 2px;
            padding-left: 50px;
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
        .inputSearchRoom {
            width: 300px;
            padding: 4px;
            padding-left: 60px;
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
        .inputSearchRoom {
            width: 600px;
            padding: 6px;
            padding-left: 80px;
            font-size: 30px;
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
        font-size: 45px;
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
        font-size: 45px;
        line-height: 40px;
        margin-left: 90px;
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
        top: -55%;
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
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;

    line-height: 14px;

    color: ${themes.colors.primary};
    @media ${device.tablet} {
        margin-top: 4%;
        margin-left: 5%;
        font-size: 26px;
    }

    @media ${device.laptop} {
        margin-top: 4%;
        margin-left: 5%;
        font-size: 30px;
    }

    @media ${device.laptopL} {
        margin-top: 3%;
        margin-left: 4%;
        font-size: 32px;
    }

    @media ${device.desktop} {
        margin-top: 5%;
        margin-left: 4%;
        font-size: 64px;
    }
`;
export const SearchBox = styled.div`
    display: flex;

    position: relative;
    @media ${device.tablet} {
        margin-top: 4%;
        margin-left: 4%;
    }

    @media ${device.laptop} {
        margin-top: 4%;
        margin-left: 4%;
    }

    @media ${device.laptopL} {
        margin-top: 2%;
        margin-left: 4%;
    }

    @media ${device.desktop} {
        margin-top: 4%;
        margin-left: 4%;
    }
`;
export const SearchIcon = styled(Search)`
    position: absolute;
    color: ${themes.colors.light};
    cursor: pointer;
    top: 25%;
    left: 2%;
    @media ${device.laptop} {
        font-size: 16px;
    }

    @media ${device.laptopL} {
        font-size: 16px;
    }

    @media ${device.desktop} {
        font-size: 30px;
    }
`;

export const Type = styled.div`
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
    .w-150 {
        width: 150px;
    }
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
    @media ${device.tablet} {
        margin-top: -5%;
        margin-left: 65%;
        div {
            font-size: 12px;

            /* identical to box height */

            color: ${themes.colors.primary};
        }
        .head {
            width: 80px;
        }
        .menu {
            width: 80px;
        }

        .transform {
            transform: translate3d(-59px, 50px, 0px) !important;
        }
    }

    @media ${device.laptop} {
        margin-top: -5%;
        margin-left: 65%;
        div {
            font-size: 15px;

            /* identical to box height */

            color: ${themes.colors.primary};
        }
        .head {
            width: 100px;
        }
        .menu {
            width: 100px;
        }

        .transform {
            transform: translate3d(-59px, 50px, 0px) !important;
        }
    }

    @media ${device.laptopL} {
        margin-top: -3%;
        margin-left: 65%;
        div {
            font-size: 18px;

            color: ${themes.colors.primary};
        }
        .head {
            width: 150px;
        }
        .menu {
            width: 150px;
        }
        .transform {
            transform: translate3d(0px, 50px, 0px) !important;
        }
    }

    @media ${device.desktop} {
        margin-top: -3%;
        margin-left: 68%;
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

export const RTable = styled(Table)`
    width: 925px;
    color: white;
    margin-top: 20%;
    td,
    tr {
        align-items: center;
        color: white;
        background-color: ${themes.colors.primary5};
    }
    tr {
        border: 2px solid ${themes.colors.primary};
    }

    th {
        background-color: ${themes.colors.primary5};
    }
    .table-hover tbody tr:hover {
        background-color: #f5f5f5;
        color: #333;
    }
    @media ${device.tablet} {
        width: 540px;
        margin-top: 3%;
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
            padding: 0.2rem 0.5rem;
        }
    }
    @media ${device.laptop} {
        width: 600px;
        margin-top: 3%;
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
            padding: 0.2rem 0.5rem;
        }
    }

    @media ${device.laptopL} {
        width: 925px;
        margin-top: 3%;
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
            padding: 0.5rem 0.5rem;
        }
    }

    @media ${device.desktop} {
        width: 1200px;
        margin-top: 5%;
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
            padding: 0.6rem 0.6rem;
        }
        font-size: 28px;
    }
`;
export const MyTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyPagination = styled(Pagination)`
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    @media ${device.tablet} {
        margin-top: 2%;
        /* margin-left: 20%; */
    }
    @media ${device.laptop} {
        margin-top: 4%;
        /* margin-left: 30%; */
    }

    @media ${device.laptopL} {
        margin-top: 2%;
        /* margin-left: 38%; */
    }

    @media ${device.desktop} {
        margin-top: 0%;
        /* margin-left: 40%; */
        a {
            font-size: 30px;
        }
        span {
            font-size: 30px;
        }
    }
`;
export const MyButton = styled(Button)`
    background-color: ${themes.colors.primary};
    border: 1px solid ${themes.colors.primary};
`;

export const MyModal = styled(Modal)`
    .modal-content {
        background-color: ${themes.colors.primary5};
        border: 1px solid ${themes.colors.primary};
    }
    .modal-title {
        color: ${themes.colors.primary};
        border-bottom: none;
    }
    .modal-body {
        color: ${themes.colors.light};
    }
    .modal-footer {
        border-top: none;
    }
`;
