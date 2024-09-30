import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a842bdeb30264ca881367d592e8507a9'
    }
})