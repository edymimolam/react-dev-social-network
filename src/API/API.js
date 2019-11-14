import * as axios from 'axios'

const server = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "15f9d65f-a9d8-4f21-9b16-0d634e9d5732" }

})

export const authAPI = {
  me() { return server.get(`auth/me`).then(r => r.data) },
  login(email, password, rememberMe = false) {
    return server.post('auth/login', { email, password, rememberMe }).then(r => r.data)
  },
  logout() { return server.delete('auth/login').then(r => r.data) }
}

export const usersAPI = {
  getUsers(pageNum = 1, usersPerPage = 10) {
    return server.get(`users?page=${pageNum}&count=${usersPerPage}`).then(r => r.data)
  }
}

export const profileAPI = {
  getProfileInfo(id) { return server.get(`/profile/${id}`).then(r => r.data) },
  getProfileStatus(id) { return server.get(`/profile/status/${id}`).then(r => r.data) },
  updateProfileStatus(status) { return server.put('/profile/status', { status }).then(r => r.data) },
  uploadProfilePhoto(img) {
    const formData = new FormData()
    formData.append('image', img)
    return server.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(r => r.data)
  }
}

export const followAPI = {
  follow(id) { return server.post(`follow/${id}`).then(r => r.data) },
  unfollow(id) { return server.delete(`follow/${id}`).then(r => r.data) }
}

