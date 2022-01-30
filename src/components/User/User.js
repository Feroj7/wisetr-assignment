import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { Divider } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import UserEditModal from '../UserEditModal/UserEditModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteUserStart } from '../../redux/actions';
import Swal from 'sweetalert2';

const User = ({ user }) => {

    const { id, name, username, email, phone, website } = user;
    const [isLiked, setIsLiked] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const dispatch = useDispatch();

    const handleLikeDislike = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUserStart(id));
                Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            <Grid item xs={4} sm={4} md={3}>
                <Card sx={{ maxWidth: 345, border: '1px solid #D7DFDE' }} >
                    <CardMedia
                        component="img"
                        height="340px"
                        image={`https://avatars.dicebear.com/v2/avataaars/${username}.svg`}
                        alt="user"
                    />
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Link to={`/users/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="subtitle2" >
                                {name}
                            </Typography>
                        </Link>
                        <Typography variant="body2" sx={{ my: 1 }} color="text.secondary">
                            <span style={{ display: 'flex', alignItems: 'center' }}> <MailOutlineIcon style={{ marginRight: '6px' }} />{email}</span>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
                            <span style={{ display: 'flex', alignItems: 'center' }}> <PhoneEnabledIcon style={{ marginRight: '6px' }} />{phone}
                            </span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <LanguageIcon style={{ marginRight: '6px' }} />http://{website}
                            </span>
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <IconButton onClick={handleLikeDislike} aria-label="add to favorites">
                            {
                                isLiked ?
                                    <FavoriteIcon sx={{ color: red[700] }} />
                                    :
                                    <FavoriteBorderIcon sx={{ color: red[700] }} />
                            }

                        </IconButton>
                        <IconButton aria-label="edit" onClick={handleModalOpen} >
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(id)} aria-label="delete"  >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <UserEditModal
                user={user}
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></UserEditModal>
        </>
    );
};

export default User;