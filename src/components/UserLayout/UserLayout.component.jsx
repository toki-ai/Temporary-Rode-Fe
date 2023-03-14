import React from 'react';

import UserHeader from '../UserHeader/UserHeader.component';

function UserLayoutComponent({ children }) {
    return (
        <>
            <UserHeader></UserHeader>
            {children}
        </>
    );
}

export default UserLayoutComponent;
