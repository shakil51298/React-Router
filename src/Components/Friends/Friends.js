import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {

    const {name,email,id} = props.friendsData
    const styleOfFriend = {
        border:'1px solid red',
        padding:'15px',
        margin: '5px',
        borderRadius: '10px'
    }
    const history = useHistory()
    const handleClick = (friendId) =>{
        history.push(`/friend/${id}`)
    }
    
    return (
        <div style={styleOfFriend}>
            <h3>name: {name}</h3>
            <p>Email: {email}</p>
            <button className="btn-success" onClick={()=>handleClick(name)}>More about {name}</button>
        </div>
    );
};

export default Friends;<h3>this  is friends components</h3>