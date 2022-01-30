import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { updateUserStart } from '../../redux/actions';
import Swal from 'sweetalert2';

const UserEditModal = ({ openModal, handleModalClose, user }) => {

    const dispatch = useDispatch();
    const { id, name, email, phone, website, username, address, company } = user;
    const [userInfo, setUserInfo] = useState({
        name: name,
        email: email,
        phone: phone,
        website: website,
        username: username,
        address: address,
        company: company
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        setUserInfo(newInfo);
    }

    const handleUserInfo = (e) => {
        e.preventDefault();
        if (userInfo.name === name && userInfo.email === email && userInfo.phone === phone && userInfo.website === website) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Please Edit user information',
                showConfirmButton: true
            })
        } else {
            dispatch(updateUserStart({ id, userInfo }));
            handleModalClose();
            window.location.reload();
            Swal.fire({
                icon: 'success',
                title: 'User info successfully edited',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(userInfo);
        }
    }

    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 5
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit User Information
                    </Typography>
                    <IconButton aria-label="edit" onClick={handleModalClose} >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <form onSubmit={handleUserInfo}>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ color: 'red' }}>*</span>
                        <Typography> Name:</Typography>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={name}
                            size="small"
                        />
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ color: 'red' }}>*</span>
                        <Typography> Email:</Typography>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={email}
                            size="small"
                        />
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ color: 'red' }}>*</span>
                        <Typography> phone:</Typography>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue={phone}
                            size="small"
                        />
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ color: 'red' }}>*</span>
                        <Typography> Website:</Typography>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="website"
                            onBlur={handleOnBlur}
                            defaultValue={website}
                            size="small"
                        />
                    </Box>
                    <div style={{ width: "180px", marginLeft: 'auto', marginTop: '45px' }}>
                        <Button variant="outlined" onClick={handleModalClose} sx={{ mr: 2 }}>Cancel</Button>
                        <Button type="submit" variant="contained">Ok</Button>
                    </div>
                </form>
            </Box>
        </Modal >
    );
};

export default UserEditModal;