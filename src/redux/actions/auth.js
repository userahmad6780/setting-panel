export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_USER = 'UPDATE_USER'

export const login = (user) => ({
    type: LOGIN,
    payload: user
})

export const logout = () => ({
    type: LOGOUT,
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user
})