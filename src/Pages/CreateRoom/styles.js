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

export const Questions = styled.h2`
    margin-top: 50px;

    input[name='maxSubmitTimes'] {
        width: auto;
        display: inline-block;
        margin-left: 12px;
    }

    textarea {
        border: 1px solid ${themes.colors.primary};
        border-radius: 5px;
    }
`;

export const QuestionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
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
        bottom: -12px;
        left: 10px;
        padding: 5px;
    }

    textarea {
        display: block;

        &:focus-visible {
            outline-color: ${themes.colors.primary};
        }
    }
`;
