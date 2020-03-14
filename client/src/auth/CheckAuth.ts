import Axios from '../axios/axios';


export const CheckAuth = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = Axios.get('/api/auth/user')
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    })
}