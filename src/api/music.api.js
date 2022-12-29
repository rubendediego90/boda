import Api from './api'
import axios from 'axios'

const getMusic =async () =>{
    return await Api().get('music') 
}

const postMusic =async (data) =>{
    return await axios.post('https://bear-express-delta.vercel.app/api/music', data);
}

export  {
    getMusic,
    postMusic
}