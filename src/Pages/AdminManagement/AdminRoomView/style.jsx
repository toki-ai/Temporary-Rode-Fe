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
    .mw_fit {
        min-width: fit-content;
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
