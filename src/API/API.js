import * as axios from 'axios'

const server = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "15f9d65f-a9d8-4f21-9b16-0d634e9d5732" }

})

export const authAPI = {
  me() {return server.get(`auth/me`).then(r => r.data)}
}

export const usersAPI = {
  getUsers(pageNum = 1, usersPerPage = 10) {
    return server.get(`users?page=${pageNum}&count=${usersPerPage}`).then(r => r.data)
  }
}

export const profileAPI = {
  getProfileInfo(id) {return server.get(`/profile/${id}`).then(r => r.data)}
}

export const followAPI = {
  follow(id) { return server.post(`follow/${id}`).then(r => r.data) },
  unfollow(id) { return server.delete(`follow/${id}`).then(r => r.data) }
}

