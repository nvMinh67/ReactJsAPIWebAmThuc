import axios from "axios";

const API_URL ="http://localhost:8001/api/"

const getRestaurant =()=>{
    return axios.get(API_URL+"restaurant");
};
const UserService ={
    getRestaurant,
}
export default UserService;
