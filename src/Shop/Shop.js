import React, { useState, useEffect } from 'react';
import { fakeData } from '../data/./fakeData';
import './Shop.css'
import Info from '../Info/Info';
import Count from '../Count/Count';

const Shop = () => {
    console.log(fakeData);
    const [users, setUsers] = useState([])
    useEffect(()=>{
        setUsers(fakeData)
    },[])
    //increasing count value
    const[count,setCount] = useState([])

    //adding event handler
    const handleAddFriend = (user) => {
       const newCount = [...count, user]
       setCount(newCount);
    }

    

    return (
        <div className="main-container">
            <div className="users-container">
                    {
                        users.map(user => <Info handleAddFriend={handleAddFriend} user={user} ></Info>)
                    }
            </div>

            <div className="count-container">
                <Count count={count} ></Count>
            </div>
        </div>
    );
};

export default Shop;