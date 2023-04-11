import styled from 'styled-components';

export const RoomEditStyle = styled.div`
    .box-style {
        background: ${(props) => props.theme.colors.light};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 1.6em;
    }
    .rounded-l-0 {
        border-radius: 0.35em 0 0 0.35em;
    }

    .rounded-r-0 {
        border-radius: 0 0.35em 0.35em 0;
    }
    .btn-green,
    .btn-green:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
        border-color: ${(props) => props.theme.colors.primary};
    }
    .btn-green:hover {
        transform: scale(1.03);
        opacity: 0.8;
    }
    .mw-fit {
        min-width: 3.5em;
    }
    .bg-light {
        background-color: ${(props) => props.theme.colors.light};
    }
    .border-green {
        border-color: ${(props) => props.theme.colors.primary};
    }
    .color-primary {
        color: ${(props) => props.theme.colors.primary};
    }
    .btn-light {
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.light};
        border-color: ${(props) => props.theme.colors.primary};
    }
    .btn-light:hover {
        opacity: 0.8;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
        border: 0.5px solid;
    }
    .border-dashed {
        border: 0.5px dashed;
    }
    .border-dashed-green {
        border: 0.5px ${(props) => props.theme.colors.primary} dashed;
    }
    .border-solid-green {
        border: 0.5px ${(props) => props.theme.colors.primary} solid;
    }
    .btn-grey,
    .btn-grey:hover {
        background-color: ${(props) => props.theme.colors.grey2};
        color: ${(props) => props.theme.colors.light};
        border: none;
    }
    .btn-grey:hover {
        opacity: 0.8;
        transform: scale(1.025);
    }
    .width {
        width: 100px;
    }
    .height-x {
        width: 4px;
        height: 2px;
        /* height: 4px; */
        position: absolute;
    }
    .height-wrap-x {
        height: 4px;
    }
    .btn-height-x {
        height: 10px;
    }

    label[for='input'],
    label[for='output'] {
        position: relative;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.light};
        margin-left: 10px;
        padding: 5px;
        z-index: 1;
    }

    textarea {
        position: relative;
        top: -18px;
        display: block;
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 5px;
        padding: 10px;
        &:focus-visible {
            outline-color: ${(props) => props.theme.colors.primary};
        }
    }
    .preview-image {
        height: 250px;
        object-fit: fill;
    }

    .show {
        min-height: 0;
        max-height: 275px;
    }
    .hide {
        max-height: 0;
    }
    .questions-mh {
        min-height: 370px;
    }
    .test-case-mh {
        height: 275px;
    }
    .overflow-y-auto {
        overflow-y: auto;
    }
    .color-red {
        color: ${(props) => props.theme.colors.red2};
    }
    .form-control:focus {
        color: ${(props) => props.theme.colors.dark};
    }
    .colorpick-eyedropper-input-trigger {
        display: none;
    }
    .w-20 {
        width: 20%;
    }
    @media (min-width: 1001px) {
        .input-num {
            width: 1em;
        }
    }
    @media (max-width: 1000px) {
        .btn-sm-sm {
            width: 2.4em;
            height: 2.3em;
        }
        .input-num {
            width: 2em;
            height: 2.3em;
        }
    }
`;
