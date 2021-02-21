import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b02a9-default-rtdb.firebaseio.com/'
});

export default instance;