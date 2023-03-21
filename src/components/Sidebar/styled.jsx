import {
    BarChartFill,
    ChatDots,
    FileEarmarkText,
    GearFill,
    HouseDoorFill,
    PersonCircle,
    PersonFill,
    Power,
} from 'react-bootstrap-icons';
import styled from 'styled-components';

export const Container = styled.div`
    width: 20%;
    height: 87vh;
    background: #ffffff;
    box-shadow: 6px 35px 24px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0 0;
    z-index: 1;
    a {
        color: #515151;
        text-decoration: none;
    }
`;

export const User = styled.div`
    width: 100%;
    height: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 1.4vw;
        line-height: 21px;
    }

    p {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 500;
        font-size: 1.3vw;
        line-height: 18px;
    }
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    height: calc(100% - 28%);
`;
export const IconUser = styled(PersonCircle)`
    width: 35%;
    height: 35%;
    margin-bottom: 10px;
`;

export const General = styled.div`
    width: 100%;
    height: 10%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        width: 95%;
        height: 21px;
        margin-left: 10px;
    }
`;

export const Text = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 21px;
    color: #515151;
    cursor: pointer;
    transition: 0.3s;
    a {
        &:hover {
            color: #00e7aa;
        }
    }
`;

export const IconHouse = styled(HouseDoorFill)`
    width: 18px;
    height: 14px;
`;

export const Icon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
`;
export const ContestInfo = styled.div`
    width: 100%;
    height: calc(100% - 28%);
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    row-gap: 14px;

    div {
        width: 95%;
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
    }
`;

export const IconPerson = styled(PersonFill)`
    width: 20px;
    height: 16px;
`;

export const IconFile = styled(FileEarmarkText)`
    width: 20px;
    height: 16px;
`;

export const IconChat = styled(ChatDots)`
    width: 20px;
    height: 16px;
`;

export const IconSetting = styled(GearFill)`
    width: 20px;
    height: 16px;
`;

export const IconLogOut = styled(Power)`
    width: 20px;
    height: 16px;
`;

export const IconBarChart = styled(BarChartFill)`
    width: 20px;
    height: 16px;
`;

export const BoldText = styled.section`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3vw;
    line-height: 21px;
    color: #111111;
    margin-bottom: 11px;
`;

export const EndBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 14px;
    height: 100%;
    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 14px;
        cursor: pointer;
    }

    nav:last-child {
        color: red;
        a {
            color: red;
        }
        div:first-child {
            color: #111111;
            a {
                color: #111111;
            }
        }
        div:hover {
            color: #00e7aa;
            a {
                color: #00e7aa;
            }
        }
    }
`;

// export const NavTop = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     row-gap: 14px;
// `;

// export const NavBottom = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     row-gap: 14px;
//     &:last-child {
//         color: red;
//         background-color: black;
//     }
// `;
