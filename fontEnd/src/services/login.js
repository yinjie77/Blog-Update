import axios from "axios";
const baseurl = '/api/login'

//登录
const login = async newObjcet => {
    const response = await axios.post(baseurl, newObjcet)
    return response.data
}

export default { login }