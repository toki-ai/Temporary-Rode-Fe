import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Bg from '../../../assets/Home/bg.png';
import roomApi from '../../../utils/api/roomApi';
import { Background, Box, MyPagination, MyTable, Text, Type } from '../styled';
import { RTable } from '../styled';
import DropdownType from './DropdownType';
import PaginationRoom from './PaginationRoom';
import { RoomData } from './RoomData';
import SearchRoom from './SearchRoom';

function Content() {
    const titles = [
        { id: 1, name: 'Room Code' },
        { id: 2, name: 'Room Type' },
        { id: 3, name: 'Open Time' },
        { id: 4, name: 'Close Time' },
        { id: 5, name: 'Duration' },
    ];

    const [selected, setSelected] = useState('All');
    const [update, setUpdate] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [rooms, setRooms] = useState([]);
    const [type, setType] = useState('');
    const [meta, setMeta] = useState();
    const [currentPage, setCurrentPage] = useState(meta?.currentPage || 1);
    console.log(meta?.currentPage);
    console.log(currentPage);
    const handleTypeChange = (eventKey) => {
        setSelected(eventKey);
        switch (eventKey) {
            case 'Algorithm': {
                setType('BE');
                break;
            }
            case 'CSS Battle': {
                setType('FE');
                break;
            }
            default:
                setType('');
        }
    };

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        console.log(pageNumber);
        if (pageNumber > 0) setCurrentPage(pageNumber);
    };
    console.log(type);
    useEffect(() => {
        let req = {
            limit: 5,
            search: searchValue,
            page: currentPage,
        };
        if (type != '') req['filter.type'] = type;
        console.log(req);
        setUpdate(false);
        roomApi
            .userGetAllRoom(req)
            .then((res) => {
                setRooms(res.data.data.data);
                setMeta(res.data.data.meta);
                setUpdate(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchValue, type, currentPage]);
    console.log(meta);
    return (
        <Box>
            <Background src={Bg}></Background>
            <Text>Practice Room</Text>
            <SearchRoom handleSearchChange={handleSearchChange} value={searchValue}></SearchRoom>
            <Type>
                <div>Room Type</div>
                <DropdownType
                    handleTypeChange={handleTypeChange}
                    selected={selected}
                ></DropdownType>
            </Type>
            <MyTable>
                <RTable striped variant="dark">
                    <thead>
                        <tr>
                            {titles.map((titles) => {
                                return <th key={titles.id}>{titles.name}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>{update && <RoomData rooms={rooms}></RoomData>}</tbody>
                </RTable>
            </MyTable>
            <PaginationRoom
                currentPage={meta?.currentPage}
                totalPages={meta?.totalPages}
                handlePageChange={handlePageChange}
            />
        </Box>
    );
}

export default Content;
