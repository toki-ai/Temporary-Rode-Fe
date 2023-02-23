import { Alert } from 'react-bootstrap';

import { Container } from './styled';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AlertSuccess(props) {
    return (
        <Container>
            <Alert variant="success" className="d-flex p-2 flex-column align-items-center">
                <Alert.Heading>
                    {props.title}
                    <i className="bi bi-check-circle-fill" style={{ padding: '10px' }}></i>
                </Alert.Heading>
                <p>
                    {props.body} <Alert.Link href="#">Test</Alert.Link>
                </p>
            </Alert>
        </Container>
    );
}
