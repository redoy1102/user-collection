import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus,faPhone } from '@fortawesome/free-solid-svg-icons';
//<i class="fas fa-phone"></i>
import './Info.css'

const Info = (props) => {
    // console.log(props.product);
    const {Name,Email,Picture,Phone,Salary} = props.user;
    return (
        <div className="users-information">
            <div className="user-img" >
                <img width="150px" height="100%" src={Picture} alt=""/>
            </div>
            <div className="user-info">
                <h4>Name: {Name}</h4>
                <p>E-mail: {Email}</p>
                <p><small>
                <FontAwesomeIcon icon={ faPhone }/> Contact Number: {Phone}
                    </small>
                </p>
                <p><small><b>Salary: ${Salary}</b></small></p>
                <button className="btn" onClick={ () => props.handleAddFriend(props.user)}> <FontAwesomeIcon icon={ faUserPlus }/> Add Friend</button>
            </div>
        </div>
    );
};

export default Info;