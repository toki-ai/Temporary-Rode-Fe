import { OffcanvasStyled, OffcanvasTitle } from '../../Pages/CssBattle/styled';

import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvasComponents = ({ title, show, setShow, children }) => {
    const handleClose = () => setShow(false);

    return (
        <OffcanvasStyled show={show} onHide={handleClose}>
            <Offcanvas.Header>
                <OffcanvasTitle>{title}</OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>{children}</Offcanvas.Body>
        </OffcanvasStyled>
    );
};

export default OffCanvasComponents;
