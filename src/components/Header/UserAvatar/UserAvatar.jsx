import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import Button from '../../Button/Button';
import { login } from './users.service';

const UserAvatar = () => {
    const { status, user, connect, disconnect, loading } =
        useContext(UserContext);
    if (status === 'disconnected') {
        return (
            <>
                <Button
                    onClick={() => {
                        loading();
                        login('guest', (user) => connect(user));
                    }}
                >
                    Log-in
                </Button>
            </>
        );
    }
    if (status === 'loading') return <div>Loading...</div>;
    return (
        <>
            <div>Welcome {user.username}</div>
            <Button onClick={disconnect}>Log-out</Button>
        </>
    );
};

export default UserAvatar;
