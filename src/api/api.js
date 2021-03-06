import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9e0a088c-1b8a-42bc-a912-6800076dc7b7"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const follow = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}