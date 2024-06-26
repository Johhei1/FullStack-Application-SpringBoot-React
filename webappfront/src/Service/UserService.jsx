import axios from 'axios';

const USER_BASE_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {
    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL);
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user);
    }

    getUserById(userId) {
        return axios.get(`${USER_BASE_REST_API_URL}/${userId}`);
    }

    updateUser(userId, user) {
        return axios.put(`${USER_BASE_REST_API_URL}/${userId}`, user);
    }

    deleteUser(userId) {
        return axios.delete(`${USER_BASE_REST_API_URL}/${userId}`);
    }

    addAddress(userId, homeAddress, workAddress) {
        return axios.post(`${USER_BASE_REST_API_URL}/${userId}/address`, {
        homeAddress: homeAddress,
        workAddress: workAddress
    });
    }

    getAddressesByUserId(userId) {
        return axios.get(`${USER_BASE_REST_API_URL}/${userId}/address`);
    }
}

export default new UserService();
