import axios from "axios";

export const getUsersApi = async () => {
    return await axios.get('http://localhost:5000/users')
}

export const deleteUserApi = async (userId) => {
    return await axios.delete(`http://localhost:5000/users/${userId}`);
}

export const updateUserApi = (userId, userInfo) => {
    return axios.put(`http://localhost:5000/users/${userId}`, userInfo);
}
