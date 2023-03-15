import * as React from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap/esm';

import accountsApi from '../../../utils/api/accountsApi';

const More = ({ id, setAccounts }) => {
    const handleActive = (id) => {
        accountsApi.postActive(id).then((response) => {
            if (response.data.status == 200) {
                accountsApi.getAll().then((res) => {
                    console.log(res);
                    setAccounts(res.data.data);
                });
            }
        });
    };
    return (
        <>
            <DropdownButton
                align="start"
                variant="outline"
                title={<i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>}
                style={{ width: '50px' }}
                bsPrefix="w-75 d-flex justify-content-center dropdown-style-2 w-50"
            >
                <Dropdown.Item onClick={() => handleActive(id)}>Ban / Unban</Dropdown.Item>
            </DropdownButton>
        </>
    );
};
export default More;
