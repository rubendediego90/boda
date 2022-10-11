import axios from 'axios'

export default () => {
    return axios.create({
        baseURL:'https://bear-express-delta.vercel.app/api/'
    })
}