import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

function DropdownType({ handleTypeChange, selected }) {
    const types = [
        { name: 'All', id: 1 },
        { name: 'Algorithm', id: 2 },
        { name: 'CSS Battle', id: 3 },
    ];

    console.log(selected);

    return (
        <Dropdown className="d-inline mx-2" onSelect={handleTypeChange}>
            <Dropdown.Toggle id="dropdown-autoclose-true" className="bg border w-150 button">
                {selected}
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg border transform w-150">
                {types.map((type) => {
                    return (
                        <Dropdown.Item eventKey={type.name} key={type.id}>
                            {type.name}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownType;
