import axios from 'axios';

export default axios.create({
	baseURL : `https://emergencyelectric.herokuapp.com/`,
});
