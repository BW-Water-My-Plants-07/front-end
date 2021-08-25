import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL:'https://bw-water-my-plants-07-back-end.herokuapp.com'
  });
};

export default axiosWithAuth;
