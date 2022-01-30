import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';
import User from '../User/User';
import { fetchUsersStart } from '../../redux/actions';

const Users = () => {

    const dispatch = useDispatch();

    const { users, loading } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersStart());
    }, [])

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        loading ?
                            <Box sx={{ width: '1800px', marginLeft: 'auto', marginTop: '50px' }}>
                                <CircularProgress />
                            </Box>
                            :
                            users.map(user => (
                                <User key={user.id} user={user}></User>
                            ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Users;