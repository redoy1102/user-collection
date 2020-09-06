import React from 'react';

const Count = (props) => {
    const count = props.count;
    const total = count.reduce((total,user) => total + user.Salary,0)
    return (
        <div>
            <p>Total Friend Request Sent: {count.length}</p> 
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Count;