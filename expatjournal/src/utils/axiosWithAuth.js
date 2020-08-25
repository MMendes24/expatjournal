import axios from 'axios'

const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://reqres.in/api/users",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export default axiosWithAuth 

