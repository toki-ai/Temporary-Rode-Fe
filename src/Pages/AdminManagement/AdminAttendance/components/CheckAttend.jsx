import * as React from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap/esm';
import { useParams } from 'react-router-dom';

import userRoomApi from '../../../../utils/api/userRoomApi';

const CheckAttend = ({ idUserRoom, setAccounts }) => {
    const { id } = useParams();
    const handleActive = (idUserRoom) => {
        userRoomApi.postCheckAttend(idUserRoom).then((res) => {
            if (res.data.status == 200) {
                let req = {
                    roomId: id,
                };
                userRoomApi.getAllUserInRoom(req).then((response) => {
                    setAccounts([...response?.data.data.data]);
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
                <Dropdown.Item onClick={() => handleActive(idUserRoom)}>
                    Attend / Absent
                </Dropdown.Item>
            </DropdownButton>
        </>
    );
};
export default CheckAttend;
