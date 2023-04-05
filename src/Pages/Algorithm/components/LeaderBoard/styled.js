import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

export const NavStyled = styled(Nav)`
    border: 1px solid #45ce7b;
`;
export const LeaderBoardStyled = styled.div`
    padding: 20px;
    background-color: #020d26;
    height: 100%;
    position: relative;
    .bg-blue {
        background-color: #020d26;
    }
    .m-0 {
        margin: 0;
    }
    .p-0 {
        padding: 0;
    }
    .w-100 {
        width: 100% !important;
    }
`;

export const HeaderLB = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    height: 60px;
`;

export const TitleLB = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: #00e7aa;
`;

export const QuestionLB = styled.select`
    border: 1px solid #2e7dff;
    width: 200px;
    padding: 10px 20px;
    font-size: 26px;
    font-weight: 300;
    border-radius: 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &:focus {
        outline: none;
    }
`;

export const TableLB = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    border: 1px solid #00e7aa;
    .thead_table {
        margin: 40px;
        border-top: 2px solid #00e7aa;
        border-bottom: 2px solid #00e7aa;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #ffffff;
        & th {
            padding-left: 26px;
        }
    }
    .tbody_table {
        height: 60px;
        font-weight: 400;
        font-size: 18px;
        line-height: 16px;
        color: #ffffff;
        transform: translate(30px, 20px);
    }
`;

export const PaginationLB = styled.div`
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 20px;
    width: 98%;
    & > * {
        padding: 0;
        margin: 0;
    }
`;
