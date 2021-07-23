import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './user.css';
import UserList from './components/UserList';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                setUsers(response.data);
            });
    }, []);
    return(
        <div className="user">
            <div className="user_info">
            <div className="user_pic"></div>
            <p className="user_name"><UserList users={users}/></p> 
            </div>
            <div className="user_slobox">
            <p className="firstp">"</p>
            <div className="user_slobox_slo">강찬웅 넌 할 수 있어</div>
            <p className="lastp">"</p>
            </div>
        </div>
    );
};

export default User;