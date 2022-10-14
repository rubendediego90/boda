import Api from './api'
import axios from 'axios'

const getGuest =async () =>{
    return await Api().get('guest') 
}

const postGuest =async (data) =>{
    return await axios.post('https://bear-express-delta.vercel.app/api/guest', data);
}

export  {
    getGuest,
    postGuest
}