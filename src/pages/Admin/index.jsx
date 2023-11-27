import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/users")
            .then((res) => {
                setUsers(res.data);
            });
    }, []);
    return (
        <Box>{users.map((item, idex) => (
            <Box key={idex}>{item.login}</Box>
        ))}</Box>
    )
}

