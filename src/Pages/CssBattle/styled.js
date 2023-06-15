import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import Accordion from 'react-bootstrap/Accordion';
// export const TargetContent = styled(OutPutContent)`
//     height: 130%;
// `;
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Box = styled.div`
    color: ${(props) => props.theme.colors.light};
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    border-radius: 10px;

    .expired-notice {
        text-align: center;
        padding: 1rem;
        border-radius: 0.25rem;
        margin: 0.5rem;
    }

    .expired-notice > span {
        font-size: 2.5rem;
        font-weight: bold;
        color: red;
    }

    .expired-notice > p {
        font-size: 1.5rem;
    }

    .show-counter .countdown-link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        border-radius: 0.25rem;
        font-size: 18px;
        text-decoration: none;
        color: #fff;
    }

    .show-counter .countdown {
        line-height: 1.25rem;
        padding: 0 0.75rem 0 0.75rem;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .show-counter .countdown.danger {
        color: #ff0000;
    }

    .show-counter .countdown > p {
        margin: 0;
    }

    .show-counter .countdown > span {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
    }
`;

export const InfoItem = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 28px;
    /* identical to box height */

    letter-spacing: 0.457143px;
    text-transform: uppercase;

    /* Yellow */

    color: #f9c41c;
    text-shadow: 0px 1px 3px #f9c41c;
    margin-bottom: 10px;
`;
export const BoxChild = styled.div`
    text-align: center;
    border: 1px solid #2e7dff;
    border-radius: 8px;
    padding: 1rem;
`;
export const BoxColor = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
`;
export const CircleColor = styled.div`
    --size: 20px;
    width: var(--size);
    height: var(--size);
    border-radius: 50px;
    background-color: ${(props) => props.color};
`;
export const TextColor = styled.span`
    color: ${(props) => props.color};
`;
export const ColorItem = styled.button`
    margin-bottom: 12px;
    display: flex;
    padding: 0;
    align-items: center;
    border: none;
    background: transparent;
    justify-content: center;
    gap: 4px;

    & span {
        margin-left: 6px;
        text-transform: uppercase;
    }
`;
export const ScoreText = styled.span`
    font-weight: 700;
`;
export const BoxEditor = styled.div`
    width: 100%;
    /* height: calc(100vh - 290px); */
    position: relative;
    color: ${(props) => props.theme.colors.light};
    /* padding: 10px 20px; */
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    border-radius: 10px;
    overflow: hidden;
    .ͼo {
        /* background-color: transparent; */
        & .cm-gutters {
            /* background-color: transparent; */
        }
    }
`;

export const TextStyled = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* button */

    color: #00e7aa;

    text-shadow: 0px 0px 4px #00c994;
`;
export const TextSmall = styled(TextStyled)`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: lowercase;

    /* Yellow */

    color: #f9c41c;
`;
export const LabelStyled = styled.label`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: lowercase;

    /* Yellow */

    color: #f9c41c;
`;

// OUTPUT CSS BATTLE
export const BoxOutput = styled.div`
    color: ${(props) => props.theme.colors.light};
    /* padding: 10px 20px; */
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    /* width: 100%; */
    max-width: 400px;
    height: 300px;

    /* border-radius: 10px; */

    overflow: hidden;
    /* height: 300px; */

    .output-container {
        position: relative;
        width: 400px;
        height: 300px;
        /* background: transparent; */
        /* z-index: 20; */
        aspect-ratio: 4/3;
        overflow: hidden;
        cursor: col-resize;
        & > img {
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;

            max-height: 300px;
            overflow: hidden;
        }
    }
    .iframe-output {
        border: none;
        background: white;
        outline: none;
        width: 400px;
        height: 300px;
    }
    .output-layer {
        position: relative;
        overflow: hidden;
        z-index: 1;
        width: 100%;
        height: 100%;
        mix-blend-mode: normal;
        pointer-events: initial;
    }
`;

export const Target = styled.div`
    max-width: 100vw;

    img {
        object-fit: cover;
        width: 400px;
        height: 300px;
    }
`;

export const StyledWrap = styled.div`
    .offcanvas-bg {
        background: #01091d;
    }
`;
//offCanvas//
export const OffcanvasStyled = styled(Offcanvas)`
    margin-top: 70px;
    background: #01091d;
    border: 1px solid #2e7dff !important;
    border-radius: 10px;
`;
export const OffcanvasTitle = styled(Offcanvas.Title)`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    /* identical to box height */

    text-transform: capitalize;

    /* button */

    color: #00e7aa;
`;

export const RankBox = styled.div`
    padding: 0.25rem 0.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
    border: 2px solid
        ${(props) =>
            props.id == 0
                ? props.theme.colors.gold
                : props.id == 1
                ? props.theme.colors.silver
                : props.id == 2
                ? props.theme.colors.cooper
                : 'transparent'};
    border-radius: 7px;
    .textAward {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 25 px;
        /* identical to box height */

        text-transform: capitalize;

        color: #ffffff;
    }
`;

///Accordion Styled///
export const AccordionItem = styled(Accordion.Item)`
    background: #000;
    color: #00e7aa;
    border: 1px solid #00e7aa !important;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 1rem;
`;
export const AccordionHeader = styled(Accordion.Header)`
    background: blue;
`;
export const AccordionBody = styled(Accordion.Body)`
    /* background: blue; */
    color: white;
`;

export const AccordionButton = styled(Accordion.Button)`
    /* background: transparent;
    color: white;
    border: 1px solid #00e7aa;
    border-radius: 7px; */
`;

export const PaddingRow = styled(Row)`
    padding: 5.5rem 1rem 0.5rem 1rem;
`;
