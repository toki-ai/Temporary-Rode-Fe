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

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.div`
    background: ${themes.colors.primary5};
    border: 1.8434px solid ${themes.colors.primary};
    box-shadow: 0px 0px 22px #00c994;
    border-radius: 12px;
    z-index: 1;
    margin: 0 20px 0 40px;
    align-items: end;
    height: 88vh;
    a {
        color: ${themes.colors.light};
        text-decoration: none;
    }
    @media ${device.tablet} {
        width: 200px;
    }
    @media ${device.laptop} {
        width: 250px;
    }

    @media ${device.laptopL} {
        width: 290px;
    }

    @media ${device.desktop} {
        width: 550px;
    }
`;

export const User = styled.div`
    width: 100%;
    height: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${themes.colors.primary};
    div {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 1.6vw;
        line-height: 21px;
        margin-bottom: 10px;
    }

    p {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 500;
        font-size: 1.3vw;
        line-height: 18px;
        letter-spacing: 0.05em;
    }
    @media ${device.desktop} {
        div {
            margin-bottom: 20px;
        }
    }
`;
export const IconUser = styled(PersonCircle)`
    width: 40%;
    height: 40%;
    margin-bottom: 10px;
    color: ${themes.colors.light};
`;
export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    height: calc(100% - 28%);
`;

export const General = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        width: 95%;
        height: 21px;
        margin-left: 10px;
    }

    @media ${device.tablet} {
        margin-bottom: 10px;
    }
    @media ${device.laptop} {
        margin-bottom: 15px;
    }

    @media ${device.laptopL} {
        margin-bottom: 30px;
    }

    @media ${device.desktop} {
        margin-bottom: 50px;
    }
`;

export const IconHouse = styled(HouseDoorFill)`
    width: 18px;
    height: 14px;
`;

export const ContestInfo = styled.div`
    width: 100%;
    height: calc(100% - 28%);
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;

    div {
        width: 95%;
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
    }
`;

export const IconChat = styled(ChatDots)`
    width: 20px;
    height: 16px;
`;

export const IconLogOut = styled(Power)`
    width: 20px;
    height: 16px;
`;

export const BoldText = styled.section`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3vw;
    line-height: 21px;
    color: ${themes.colors.primary};
    @media ${device.tablet} {
        margin-bottom: 0;
    }
    @media ${device.laptop} {
        margin-bottom: 5px;
    }

    @media ${device.laptopL} {
        margin-bottom: 11px;
    }

    @media ${device.desktop} {
        margin-bottom: 35px;
    }
`;
