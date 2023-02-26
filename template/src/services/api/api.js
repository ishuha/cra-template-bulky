import axios from 'axios';

async function get(url, {payload= {}, errorCb}) {
    try {
        const data = await axios.get(url, payload);
        return data
    } catch (error) {
        await errorCb();
        return ({
            data: null,
            error: error.message
        })
    }
}

async function post(url,{payload= {}, errorCb}) {
    try {
        const data = await axios.post(url, payload);
        return data
    } catch (error) {
        errorCb && await errorCb();
        return ({
            data: null,
            error: error.message
        })
    }
}

export default {
    get,
    post
}