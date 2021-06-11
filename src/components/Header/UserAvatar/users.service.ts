import { User } from "../../../contexts/UserContext"

export const login = (username: string, cb: (user: User) => void): void => {
    const loginFetch = setTimeout(() => {
        const connectedUser = new User(username, `http://avatar.com/${username}`)
        cb(connectedUser)
        clearTimeout(loginFetch)
    }, 350)   
}