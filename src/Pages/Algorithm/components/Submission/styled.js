import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

export const NavStyled = styled(Nav)`
    border: 1px solid #45ce7b;
`;
export const SubmissionStyled = styled.div`
    padding: 20px;
    background-color: #020d26;
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 0;
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

export const HeaderSubmission = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    height: 60px;
`;

export const TitleSubmission = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: #00e7aa;
    @media screen and (max-width: 570px) {
        font-size: 24px;
    }
`;

export const TableSubmission = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    border: 1px solid #00e7aa;
    .mb-0 {
        margin-bottom: 0;
    }
    .thead_table {
        margin: 40px;
        border-top: 2px solid #00e7aa;
        border-bottom: 2px solid #00e7aa;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        & th {
            padding-left: 26px;
        }
        @media screen and (max-width: 570px) {
            font-size: 12px;
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
    .error {
        color: #ea4335 !important;
    }
    .accepted {
        color: #06c755 !important;
    }
    .viewResult {
        color: blue !important;
    }
    .viewResult:hover {
        cursor: pointer;
    }
`;

export const TableSubmitted = styled.div`
    margin: 12px;
    height: 100%;
    width: 100%;
    border: 1px solid #2e7dff;
    border-radius: 9px;
    .title {
        margin: 20px 70px;
        font-weight: 700;
        font-size: 26px;
        line-height: 40px;
        text-transform: uppercase;
        color: #00e7aa;
    }
`;
export const AnswerSubmitted = styled.div`
    height: auto;
    width: 100%;
    margin: 0 140px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-transform: capitalize;
    .answer {
        color: yellow !important;
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
