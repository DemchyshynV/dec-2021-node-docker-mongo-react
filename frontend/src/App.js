import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(({data})=>setUsers(data))
    }, [])

    return (
        <div>
            {users.map(value => <div key={value._id}>{value.name} -- {value.age}</div>)}
        </div>
    );
};

export {App};
