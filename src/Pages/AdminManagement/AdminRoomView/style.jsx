import styled from 'styled-components';

export const ARViewStyle = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .box-style {
        background: ${(props) => props.theme.colors.light};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 1.6em;
    }
    .bg_color_primary {
        color: ${(props) => props.theme.colors.primary};
    }
    .color_primary {
        color: ${(props) => props.theme.colors.primary};
    }
    .color_light {
        color: ${(props) => props.theme.colors.light};
    }
    .border_color_primary {
        border-color: ${(props) => props.theme.colors.primary};
    }
    .btn_primary:hover,
    .btn_primary:active,
    .btn_primary:visited,
    .btn_primary:focus {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
    }
    .miw-108 {
        min-width: 108px;
    }
    tr:not(:first-child):hover {
        background-color: ${(props) => props.theme.colors.grey};
    }
    .mw-180 {
        max-width: 180px;
    }
    .rounded-left {
        border-radius: 0.4em 0 0 0.4em;
    }
    .rounded-right {
        border-radius: 0 0.4em 0.4em 0;
    }
    .br-none {
        border-right: none;
    }
    .bl-none {
        border-left: none;
    }
    .w-105 {
        width: 105px;
    }
    .ml-2 {
        margin-left: 0.7rem;
    }

    .nav-pills > .nav-item > a {
        color: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 0.45em;
        padding: 0.4em 0.5em;
        display: flex;
        justify-content: center;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
    }

    @media (max-width: 800px) {
        .rs {
            width: 70%;
            height: 70%;
        }

        .rfs {
            font-size: 0.8em;
        }
        th {
            font-size: 0.82em;
        }
        td {
            font-size: 0.75em;
        }
    }
    @media (max-width: 600px) {
        .rs {
            width: 70%;
            height: 70%;
        }

        .rfs {
            font-size: 0.8em;
        }
        th {
            font-size: 0.52em;
        }
    }
`;
