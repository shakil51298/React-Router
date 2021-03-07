import { useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../Friends/Friends';




const Home = () => {
    const [friends,setFriends] = useState([])

    useEffect(() => {
        const url ="https://jsonplaceholder.typicode.com/users"
        axios(url)
        .then(data => setFriends(data.data))
    }, [])
    return (
        <div className="container mt-3 mb-5">
            <h2 className="text-center">Total Loded Data: {friends.length}</h2>
            {
                friends.map(friend => <Friends friendsData={friend} key={friend.phone}></Friends>)
            }
        </div>
    );
};

export default Home;