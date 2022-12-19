import axios from 'axios'

const URL = "http://localhost:3000"
const error_reponse = 'Something wrong happened'

export const getRequest = async (name) => {
    return await axios.get(URL + name, { withCredentials: true })
        .then(resp => resp.data)
        .catch(err => error_reponse);
}

export const postRequest = async (name, payload) => {
    return await axios.post(URL + name, payload, { withCredentials: true })
        .then(resp => resp.data)
        .catch(err => error_reponse);
}

export const deleteRequest = async (name) => {
    return await axios.delete(URL + name, { withCredentials: true })
        .then(resp => resp.data)
        .catch(err => error_reponse);
}

export const putRequest = async (name, payload) => {
    return await axios.put(URL + name, payload, { withCredentials: true })
        .then(resp => resp.data)
        .catch(err => error_reponse);
}