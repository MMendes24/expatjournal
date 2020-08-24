import axios from 'axios'

const axiosWithAuth = () => {
    axios.create({
        baseURL: "https://reqres.in/api/users",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export default axiosWithAuth