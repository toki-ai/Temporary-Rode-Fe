// import { useState, useEffect } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

// import ListInfo from './ListInfo';
// import { getInfos } from './axios';

const SearchBar = ({ value, handleChange }) => {
    // const [value, setValue] = useState('');
    // const handleSubmit = (e) => e.preventDefault();

    // const [infos, setInfos] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);
    // useEffect(() => {
    //     getInfos()
    //         .then((json) => {
    //             setInfos(json);
    //             return json;
    //         })
    //         .then((json) => {
    //             setSearchResults(json);
    //         });
    // }, []);
    // const handleChange = (e) => {
    //     setValue(e.target.value);
    //     if (!e.target.value) return setSearchResults(infos);
    //     const resultsArray = infos.filter((info) => info.body.includes(e.target.value));
    //     setSearchResults(resultsArray);
    // };
    // const onSearch = (searchTerm) => {
    //     setValue(searchTerm);
    //     console.log(searchTerm);
    // };
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
