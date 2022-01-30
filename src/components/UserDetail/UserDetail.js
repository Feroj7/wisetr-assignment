import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Typography } from '@mui/material';

const UserDetail = () => {

    const { userId } = useParams();
    const { users } = useSelector(state => state.users);
    const singleUser = users.find(user => user.id === Number(userId));

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Typography variant="h3" gutterBottom component="div">Detail Information of <span style={{ color: 'blue' }}>{singleUser?.name}</span></Typography>
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} md={6}>
                        <img
                            height="400px"
                            width="100%"
                            src={`https://avatars.dicebear.com/v2/avataaars/${singleUser?.username}.svg`}
                            alt={singleUser?.name}
                            loading="lazy"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 5, textAlign: 'left' }}>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Name:</span> {singleUser?.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Phone:</span> {singleUser?.phone}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Email:</span> {singleUser?.email}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Website:</span> http://{singleUser?.website}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Company:</span> {singleUser?.company?.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span style={{ fontWeight: 'bolder' }}>Address:</span> {singleUser?.address?.street}, {singleUser?.address?.suite}, {singleUser?.address?.city}
                        </Typography>
                    </Grid>
                </Grid>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button sx={{ mt: 8 }} variant="contained">Go Back to Home</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default UserDetail;