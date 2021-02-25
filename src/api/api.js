export const BASE_URL = 'http://localhost:8080'

export const API = {
    getUserList: `${BASE_URL}/user/list`,
    updateUserProfile: username => `${BASE_URL}/user/${username}/profile`
}