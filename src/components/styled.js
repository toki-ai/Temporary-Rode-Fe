import styled from 'styled-components';

export const Wrapper = styled.div`
    .tesst {
        background: ${(props) => props.theme.colors.submenu};
    }
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnStyle = styled.div`
    .btn-xl {
        margin: 0.2em;
        padding: 0.2em;
        font-size: 2em;
    }
    .btn-xxl {
        margin: 0.2em;
        padding: 0.3em 0.8em;
        font-size: 1.2em;
    }
    //for modal delete
    .btn-grey,
    .btn-grey:hover {
        background-color: ${(props) => props.theme.colors.grey2};
        color: ${(props) => props.theme.colors.light};
        border: none;
    }
    .btn-red,
    .btn-red:hover {
        background-color: ${(props) => props.theme.colors.red2};
        color: ${(props) => props.theme.colors.light};
        border: none;
    }
    .btn-grey:hover,
    .btn-red:hover {
        opacity: 0.8;
        transform: scale(1.025);
    }
`;

export const AlertWidth = styled.div`
    margin: 2em;
    width: 40em;
`;
