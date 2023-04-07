import { Button, InputGroup } from 'react-bootstrap';

const SearchBar = ({ value, handleChange }) => {
    return (
        <div>
            <InputGroup className="border rounded-pill">
                <Button className="rounded-pill dishover" variant="none">
                    <i className="bi bi-search"></i>
                </Button>
                <input
                    className="border-0 rounded-pill dishover form-control rfs"
                    placeholder="Search room..."
                    type="text"
                    value={value}
                    name="search"
                    onChange={(e) => handleChange(e)}
                />
            </InputGroup>
        </div>
    );
};

export default SearchBar;
