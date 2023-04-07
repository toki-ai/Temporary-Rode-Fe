import React from 'react';

import { Input, SearchBox, SearchIcon } from '../styled';

function SearchRoom({ handleSearchChange }) {
    return (
        <div>
            <SearchBox>
                <Input>
                    <input
                        className="inputSearchRoom bg-dark-secondary text-white bc-primary rounded-pill"
                        placeholder="Search room..."
                        type="text"
                        onChange={handleSearchChange}
                    />
                </Input>
                <SearchIcon></SearchIcon>
            </SearchBox>
        </div>
    );
}

export default SearchRoom;
