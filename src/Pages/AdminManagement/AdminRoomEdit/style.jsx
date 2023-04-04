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
`;
