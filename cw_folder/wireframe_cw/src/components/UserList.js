import React from 'react';

const UserList = ({users}) => {
    console.log(users);
    return(
        <div>
            {users.name}
        </div>
    );
};

export default UserList;