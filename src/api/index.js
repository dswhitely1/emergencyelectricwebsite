import axios from 'axios';

export default axios.create({
	// baseURL : `https://emergencyelectric.herokuapp.com/`,
	baseURL : `http://localhost:4000/`,
});
