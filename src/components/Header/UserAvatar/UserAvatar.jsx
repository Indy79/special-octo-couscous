import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import Button from '../../Button/Button';
import { login } from './users.service';

const UserAvatar = () => {
    const userContext = useContext(UserContext);
    if (!userContext.isConnected) {
        return (
            <>
                <Button
                    onClick={() =>
                        login('guest', (user) => userContext.connect(user))
                    }
                >
                    Log-in
                </Button>
            </>
        );
    }
    return (
        <>
            <div>Welcome {userContext.user.username}</div>
            <Button onClick={userContext.disconnect}>Log-out</Button>
        </>
    );
};

export default UserAvatar;
