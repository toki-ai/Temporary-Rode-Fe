import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchRoom = ({ props }) => {
    return (
        <InputGroup className="border rounded-pill">
            <Button className="rounded-pill dishover" variant="none" type="submit">
                <i className="bi bi-search"></i>
            </Button>
            <Form.Control
                className="border-0 rounded-pill dishover form-control"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder={props.placeholder}
            />
        </InputGroup>
    );
};

export default SearchRoom;
