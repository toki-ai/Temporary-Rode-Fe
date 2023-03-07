import React, { useEffect, useState } from 'react';

import accountsApi from '../../utils/api/accountsApi';
import './AllAccounts.scss';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const AllAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    console.log('🚀 ~ file: AllAccounts.jsx:7 ~ AllAccounts ~ accounts:', accounts);
    useEffect(() => {
        accountsApi.getAll().then((response) => {
            setAccounts(response.data.data);
        });
    }, []);

    const handleFilter = () => {};
    return (
        <div className="accounts">
            <div className="accounts-header">
                <div>
                    <h2 className="accounts-title">User Management</h2>
                </div>

                <div className="accounts-header-wrapper">
                    <div className="accounts-filter">
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search member..."
                            onChange={handleFilter}
                            style={{ colorScheme: 'normal', borderRadius: '10px' }}
                        />
                        <label htmlFor="">Join at</label>
                        {/* <div className="accounts-form"> */}
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        -
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        {/* </div> */}
                    </div>
                    <div className="accounts-status">
                        <label htmlFor="">Status</label>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>MSSV</th>
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
                            <td>{JSON.stringify(account.dob).substring(1, 11)} </td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AllAccounts;
