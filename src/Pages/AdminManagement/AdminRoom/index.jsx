import { useState, useEffect } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';

import roomApi from '../../../utils/api/roomApi';
import ButtonCustom from './components/Button';
import SelectCustom from './components/FilterRoom/Select';
import SearchBar from './components/SearchRoom/SearchBar';
import TableRoom from './components/Table';
import { RoomStyle } from './style';

const AdminRoom = () => {
    const { id } = useParams();
    const [result, setResult] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams(location.search);
    const [listRoom, setListRoom] = useState([]);
    const filterRoom = searchParams.get('filter.room') || '';
    const [meta, setMeta] = useState();
    function handleChange(e) {
        setResult(e.target.value);
    }

    const searchValue = searchParams.get('search') || '';
    const [currentPage, setCurrentPage] = useState(meta?.currentPage || 1);
    const handleSearchInputChange = (event) => {
        console.log(event.target.name);
        // let params = serializeFormQuery(event.target);
        setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams);
            newSearchParams.set(`${event.target.name}`, event.target.value);
            return newSearchParams;
        });
        // setSearchTerm(event.target.value);
        // setCurrentPage(1);
    };
    const handleFilterChange = (event) => {
        setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams);
            newSearchParams.set('filter.room', event.target.value);
            return newSearchParams;
        });
        // setCurrentPage(1);
    };
    useEffect(() => {
        const fetchRoom = async () => {
            const filter = {
                room: 'filter.room',
            };
            console.log(filter);
            let req = {
                roomId: id,
                page: currentPage,
                limit: 10,
                search: searchValue,
                [filter.room]: filterRoom,
            };

            roomApi.adminGetAll(req).then((response) => {
                console.log(response);
                setListRoom([...response?.data.data.data]);
                setMeta(response.data.data.meta);
            });
        };
        fetchRoom();
    }, [searchValue, filterRoom, currentPage]);
    return (
        <div className="p-2">
            <RoomStyle>
                <div className="box-style">
                    <Col className="p-3">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">Room Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-around align-items-center mb-3">
                            <Col className="col-5">
                                <SearchBar
                                    handleChange={handleSearchInputChange}
                                    value={searchValue}
                                />
                            </Col>
                            <Col className="col-4 d-flex justify-content-center">
                                <SelectCustom
                                    props={{
                                        name: 'Visibility:',
                                    }}
                                    value={filterRoom}
                                    handleChange={handleChange}
                                />
                            </Col>
                            <Col className="col-3 d-flex align-items-center justify-content-end">
                                <ButtonCustom
                                    props={{
                                        text: 'Create room',
                                        className:
                                            'bg-primary-1 text-light d-flex align-items-center text-nowrap rfs',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <TableRoom listRoom={listRoom} state={result} />
                        </Row>
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};
export default AdminRoom;
