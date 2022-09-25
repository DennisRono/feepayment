import axios from "axios"

let baseURL = 'https://api.dynadoty.com/'

export const api = async (method = 'GET', slug = '', data = {}) => {
    let config = {
        method: method,
        url: baseURL+slug,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
    };
    const response = await axios(config)
    return response.data
}

// set your backend endpoint here