import styled from 'styled-components';

import { themes } from '../../themes';

export const Wrapper = styled.div`
    max-width: 750px;
    margin: auto;
    font-family: 'Quicksand';
    background-color: ${themes.colors.light};

    .form-label {
        font-size: 11px;
        font-weight: 600;
    }
`;

export const Title = styled.h1`
    font-size: 23px;
    color: ${themes.colors.primary};
    font-weight: 700;
    margin: 14px 0 28px 0;
`;

export const Questions = styled.div`
    margin-top: 50px;

    hr {
        margin-top: 50px;
    }
`;

export const QuestionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
`;

export const NumberInput = styled.div`
    display: inline-block;
    margin-left: 12px;

    p {
        position: relative;
        top: -1px;
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        border: 1px solid ${themes.colors.primary};
        top: -1px;
    }

    button {
        width: 25px;
        height: 25px;
        background-color: ${themes.colors.primary};
        border: 1px solid ${themes.colors.primary};
        color: ${themes.colors.light};
    }
`;

export const UploadImage = styled.label`
    border-radius: 10px;
    width: 200px;
    font-size: 10px;
    height: 200px;
    border: 1px dashed ${themes.colors.primary};
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    & span {
        margin-top: 5px;
    }

    &:hover {
        background-color: ${themes.colors.primary};
        cursor: pointer;
        color: ${themes.colors.light};
    }
`;

export const Testcase = styled.div`
    label[for='input'],
    label[for='output'] {
        position: relative;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: ${themes.colors.primary};
        background-color: ${themes.colors.light};
        margin-left: 10px;
        padding: 5px;
        z-index: 1;
    }

    textarea {
        position: relative;
        top: -12px;
        display: block;
        border: 1px solid ${themes.colors.primary};
        border-radius: 5px;
        padding: 10px 0;

        &:focus-visible {
            outline-color: ${themes.colors.primary};
        }
    }
`;

export const PreviewImage = styled.img`
    width: 300px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 20px;
`;
