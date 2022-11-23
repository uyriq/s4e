import { useContext, useState, createContext } from 'react'
import { setCookie, getCookie } from './utils'

const DataContext = createContext(undefined)

export function ProvideAuth({ children }) {
    const auth = useProvideAuth()
    return <DataContext.Provider value={auth}>{children}</DataContext.Provider>
}

export function useAuth() {
    return useContext(DataContext)
}

export function useProvideAuth() {
    const [userData, setUserData] = useState(null)

    const setData = async (form) => {
        const data = await loginRequest(form)
            .then((res) => {
                let authToken
                res.headers.forEach((header) => {
                    if (header.indexOf('Bearer') === 0) {
                        authToken = header.split('Bearer ')[1]
                    }
                })
                if (authToken) {
                    setCookie('token', authToken)
                }
                return res.json()
            })
            .then((data) => data)

        if (data.success) {
            setUserData({ ...data.user, id: data.user._id })
        }
    }

    return {
        user: userData,
        signIn: setData,
    }
}
