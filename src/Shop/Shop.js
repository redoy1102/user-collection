import React, { useState, useEffect } from 'react';
import { fakeData } from '../data/./fakeData';
import './Shop.css'

const Shop = () => {
    console.log(fakeData);

    const [users, setUsers] = useState([])
    useEffect(()=>{
        setUsers(fakeData)
    },[])


    return (
        <div className="user-container">
            <div className="users-container">
                {
                    users.map(user => <li>{user.Name}</li>)
                }   
            </div>

            <div className="count-container">
                Total Friend:
            </div>
        </div>
    );
};

export default Shop;