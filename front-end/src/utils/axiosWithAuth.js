import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://bw-water-my-plants-07-back-end.herokuapp.com/api',      
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
