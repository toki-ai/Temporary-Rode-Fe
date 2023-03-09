import styled from 'styled-components';

export const RoomStyle = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .box-style {
        background: #ffffff;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .color-primary {
        color: #00e7aa;
    }
    .color-secondary {
        color: #6c757d;
    }
    .bg-primary-1 {
        background-color: #00e7aa;
    }

    .bg-primary-1:hover,
    .bg-primary-1:focus,
    .bg-primary-1:active,
    .bg-primary-1:visited {
        background-color: #00e7aa;
        opacity: 0.8;
    }
    .dishover:hover {
        border-color: white;
    }
    .from-control:focus {
        color: #495057 !important;
    }
    input:focus,
    input:active,
    input:hover,
    input:visited {
        box-shadow: unset !important;
        outline: 0 !important;
    }
    .dropdown-toggle::after {
        display: none !important;
    }
    .bg-secondary-1 {
        color: #000;
        opacity: 0.7;
    }
    .btn-hover:hover {
        opacity: 1;
    }
    .item-style:hover {
        background-color: #00e7aa;
        color: white;
    }
    .dropdown-style {
        background-color: white;
        color: #6c757d;
    }
    .dropdown-style:hover {
        background-color: #00e7aa;
        color: white;
        border-color: #00e7aa;
    }
    table,
    th,
    td {
        text-align: center;
        vertical-align: middle;
    }
`;
