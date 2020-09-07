import React from 'react';
import './Count.css'

const Count = (props) => {
    const count = props.count;
    const total = count.reduce((total,user) => total + user.Salary,0)
    return (
        <div className="friends-summery">
            <h2>Your Friends Summery</h2>
            <p>Total Friend Request Sent: {count.length}</p> 
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Count;