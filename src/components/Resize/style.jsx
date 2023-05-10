import styled from 'styled-components';

export const ResizeStyle = styled.div`
    .box-style {
        background: ${(props) => props.theme.colors.light};
        box-shadow: 0px 29px 184px -14px ${(props) => props.theme.colors.green};
        border-radius: 0.7em;
        padding: 2em;
        /* border: 0.1em solid ${(props) => props.theme.colors.primary}; */
    }
    .box-style h2 {
        font-family: 'Quicksand', sans-serif;
        font-weight: 900;
        font-size: 2.5em;
    }
    .h-100 {
        height: 90%;
    }
    .vh-100 {
        height: 100vh;
    }
    .color-primary {
        color: ${(props) => props.theme.colors.primary};
    }
    .image {
        width: 2em;
    }
    iframe {
        pointer-events: none;
    }
    .bg-dark-secondary {
        background: ${(props) => props.theme.colors.green};
    }
    @media (max-width: 480px) {
        /* smartphones, Android phones, landscape iPhone */
        iframe {
            width: 100px;
            height: 100px;
        }
        * {
            font-size: 0.9em;
        }
        .box-style {
            padding: 1em;
        }
        .box-style h2 {
            font-size: 2em;
        }
    }
`;
