import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {id}= useParams()
    const [frData,setFrData] = useState({})
    const {name,username,email,phone,website} = frData;
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        axios(url)
        .then(data => setFrData(data.data)
        )
    },[])
    
    return (
        <div className="container mt-5 border text-center w-50 p-3">
            <h2>{id}</h2>
            <p>this is my Friend {name}</p>
            <p>this is my Friend {username}</p>
            <p>this is my Friend {email}</p>
            <p>this is my Friend {phone}</p>
            <p>this is my Friend {website}</p>
        </div>
    );
};

export default FriendDetails;