import { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';

import userRoomApi from '../../../utils/api/userRoomApi';
import Join from '../../Accounts/components/Join';
import { RoomStyle } from '../AdminRoom/style';
import CheckAttend from './components/CheckAttend';
import PaginationAttend from './components/PaginationAttend';
import Search from './components/Search';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const AdminAttendance = () => {
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams(location.search);
    const { id } = useParams();
    //giá trị còn fixed cứng -> cần thay đổi khúc này
    const searchValue = searchParams.get('search') || '';
    const filterAttendance = searchParams.get('filter.attendance') || '';

    const [listAttend, setListAttend] = useState([]);
    const [meta, setMeta] = useState();
    //search and filter
    // const [searchTerm, setSearchTerm] = useState('');

    //pagination and current page
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
            newSearchParams.set('filter.attendance', event.target.value);
            return newSearchParams;
        });
        // setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const fetchAttend = async () => {
            const filter = {
                attendance: 'filter.attendance',
            };
            let req = {
                roomId: id,
                page: currentPage,
                limit: 10,
                search: searchValue,
                [filter.attendance]: filterAttendance,
            };

            userRoomApi.getAllUserInRoom(req).then((response) => {
                setListAttend([...response?.data.data.data]);
                setMeta(response.data.data.meta);
            });
        };
        fetchAttend();
    }, [searchValue, filterAttendance, currentPage]);
    return (
        <div className="p-2">
            <RoomStyle>
                <div className="box-style p-4">
                    <Col className="p-3">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">Attendance Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-between align-items-center mb-3">
                            <Col className="col-5">
                                <Search action={handleSearchInputChange} value={searchValue} />
                            </Col>

                            <Col className="col-3 d-flex align-items-center justify-content-end">
                                <div className="accounts-status">
                                    <label htmlFor="attend">Status</label>
                                    <Form.Select
                                        id="attend"
                                        aria-label="Default select example"
                                        // placeholder="Select"
                                        value={filterAttendance}
                                        onChange={(e) => {
                                            handleFilterChange(e);
                                        }}
                                    >
                                        {' '}
                                        <option value="">Select attend</option>
                                        <option value="0">Absent</option>
                                        <option value="1">Attended</option>
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>

                                        <th>Student ID</th>
                                        <th>Student Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listAttend?.length == 0 ? (
                                        <tr>
                                            <td className="text-center" colSpan={1000}>
                                                No data available in table
                                            </td>
                                        </tr>
                                    ) : (
                                        listAttend?.map((attend, id) => (
                                            <tr key={attend.id}>
                                                <td>{id + 1}</td>
                                                <td>{attend.account.studentId}</td>
                                                <td>
                                                    {attend.account.fname +
                                                        ' ' +
                                                        attend.account.lname}
                                                </td>
                                                <td>{attend.account.email}</td>
                                                <td>{attend.account.phone}</td>

                                                <td
                                                    className="d-flex"
                                                    style={{ alignItems: 'center' }}
                                                >
                                                    {attend.attendance ? (
                                                        <span className="accounts isActive">
                                                            Attended
                                                        </span>
                                                    ) : (
                                                        <span className="accounts isLocked">
                                                            Absent
                                                        </span>
                                                    )}
                                                    <CheckAttend
                                                        idUserRoom={attend.id}
                                                        setAccounts={setListAttend}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </Table>
                        </Row>

                        {listAttend && (
                            <PaginationAttend
                                action={handlePageChange}
                                totalPages={meta?.totalPages}
                                currentPage={meta?.currentPage}
                            />
                        )}
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};

export default AdminAttendance;
// <Col className="col-4 d-flex ">
// <Join />
// </Col>
