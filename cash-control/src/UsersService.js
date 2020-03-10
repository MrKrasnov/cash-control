import axios from "axios";

const url = "http://localhost:3000/api/users/";

class UserService {
    // Get Users
    static getUsers() {
        return new Promise( async(resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(login => ({
                        ...login
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }

    // Create Users
    static insertUser(info){
        return axios.post(url, info);
    }
    // Delete Users
    static deleteUser(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default UserService;

