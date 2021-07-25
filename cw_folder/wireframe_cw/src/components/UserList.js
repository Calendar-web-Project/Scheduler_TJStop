import React from 'react';

const UserList = ({users}) => {
    console.log(users);
    return(
        <div>
            {users[0].name}
        </div>
    );
};

export default UserList;