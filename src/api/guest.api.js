import Api from './api'

const getGuest =async () =>{
    return await Api().get('guest') 
}

export  {
    getGuest
}