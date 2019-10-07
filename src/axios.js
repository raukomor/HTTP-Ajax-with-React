import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'Auth Token from instance'

//colocar os interceptadores
//instance.interceptors.request...

export default instance
