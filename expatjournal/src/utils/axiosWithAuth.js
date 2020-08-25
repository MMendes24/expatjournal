import axios from 'axios'

const axiosWithAuth = () => {
    axios.create({
        baseURL: "https://expatjournal-back.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export default axiosWithAuth 

