import { Alert } from 'react-bootstrap';

export default function AlertSuccess(props) {
    return (
        <Alert variant="success" className="d-flex flex-column align-items-center text-break">
            <Alert.Heading className="w-100 text-center">
                <div className="text-truncate">
                    {props.title}
                    <i className="bi bi-check-circle-fill p-2"></i>
                </div>
            </Alert.Heading>
            <p>
                {props.body} <Alert.Link href="#">Test</Alert.Link>
            </p>
        </Alert>
    );
}
