import React from 'react';

import { Button, InputGroup } from 'react-bootstrap';

const Search = () => {
    return (
        <div>
            <div>
                <InputGroup className="border rounded-pill">
                    <Button className="rounded-pill dishover" variant="none" type="submit">
                        <i className="bi bi-search"></i>
                    </Button>
                    <input
                        className="border-0 rounded-pill dishover form-control rfs"
                        placeholder="Search room..."
                        type="text"
                    />
                </InputGroup>
            </div>
        </div>
    );
};

export default Search;
