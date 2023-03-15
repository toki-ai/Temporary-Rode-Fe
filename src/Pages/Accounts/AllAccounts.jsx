import React, { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import accountsApi from '../../utils/api/accountsApi';
import './AllAccounts.scss';
import Join from './components/Join';
import More from './components/More';
import Search from './components/Search';
import { RoomStyle } from './style';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const AllAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    console.log('🚀 ~ file: AllAccounts.jsx:7 ~ AllAccounts ~ accounts:', accounts);
    useEffect(() => {
        accountsApi.getAll().then((response) => {
            console.log('getAll', response);
            setAccounts(response.data.data);
        });
    }, []);

    return (
        <div className="p-2">
            <RoomStyle>
                <div className="box-style">
                    <Col className="p-3">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">User Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-around align-items-center mb-3">
                            <Col className="col-5">
                                <Search />
                            </Col>
                            <Col className="col-4 d-flex ">
                                <Join />
                            </Col>
                            <Col className="col-3 d-flex align-items-center justify-content-end">
                                <div className="accounts-status">
                                    <label htmlFor="">Status</label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Student ID</th>
                                        <th>Student Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Date of Birth</th>
                                        <th>Join at</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts.map((account) => (
                                        <tr key={account.id}>
                                            <td>{account.studentId}</td>
                                            <td>{account.fname + ' ' + account.lname}</td>
                                            <td>{account.email}</td>
                                            <td>{account.phone}</td>
                                            <td>{account.dob.substring(0, 10)} </td>
                                            <td>01/01/2022</td>
                                            <td className="d-flex" style={{ alignItems: 'center' }}>
                                                {account.isActive ? (
                                                    <span className="accounts isActive">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="accounts isLocked">
                                                        Locked
                                                    </span>
                                                )}
                                                <More id={account.id} setAccounts={setAccounts} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};

export default AllAccounts;
