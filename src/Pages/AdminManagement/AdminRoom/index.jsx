import { useState, useEffect } from 'react';

import { Col, Form, Row } from 'react-bootstrap';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';

import Loading from '../../../components/Loading';
import roomApi from '../../../utils/api/roomApi';
import ButtonCustom from './components/Button';
import PaginationRoom from './components/Pagination';
import SearchBar from './components/SearchBar';
import TableRoom from './components/Table';
import { RoomStyle } from './style';

const AdminRoom = () => {
    const { id } = useParams();
    const [result, setResult] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams(location.search);
    const [listRoom, setListRoom] = useState([]);
    const filterRoom = searchParams.get('filter.room') || '';
    const [meta, setMeta] = useState();
    const [status, setStatus] = useState();
    const searchValue = searchParams.get('search') || '';
    const [currentPage, setCurrentPage] = useState(meta?.currentPage || 1);
    const [loading, setLoading] = useState(true);
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
            setStatus(event.target.value);
            newSearchParams.set('filter.room', event.target.value);
            return newSearchParams;
        });
        // setCurrentPage(1);
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchRoom = async () => {
            const filter = {
                room: 'filter.room',
                isPrivate: 'filter.isPrivate',
            };
            let req = {
                roomId: id,
                page: currentPage,
                limit: 10,
                search: searchValue,
                [filter.isPrivate]: status === '' ? null : status,
                [filter.room]: filterRoom,
            };
            console.log(req);
            roomApi.adminGetAll(req).then((response) => {
                console.log(response);
                setListRoom([...response?.data.data.data]);
                setMeta(response.data.data.meta);
                setLoading(false);
            });
        };
        fetchRoom();
    }, [searchValue, filterRoom, currentPage, status]);
    return loading ? (
        <Loading />
    ) : (
        <div className="w-100 p-2">
            <RoomStyle>
                <div className="box-style">
                    <Col className="p-3">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">Room Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-around align-items-center mb-3">
                            <Col className="col-5 col-md-6">
                                <SearchBar
                                    handleChange={handleSearchInputChange}
                                    value={searchValue}
                                />
                            </Col>
                            <Col className="col-4 d-flex justify-content-center col-md-3">
                                <Col className="col-lg-6">
                                    <Form.Select
                                        id="isPrivate"
                                        aria-label="Default select"
                                        value={status}
                                        onChange={(e) => {
                                            handleFilterChange(e);
                                        }}
                                    >
                                        <option value="" className="rfs">
                                            All
                                        </option>
                                        <option value="0" className="rfs">
                                            Public
                                        </option>
                                        <option value="1" className="rfs">
                                            Private
                                        </option>
                                    </Form.Select>
                                </Col>
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
                        <PaginationRoom
                            action={handlePageChange}
                            totalPages={meta?.totalPages}
                            currentPage={meta?.currentPage}
                        />
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};
export default AdminRoom;
