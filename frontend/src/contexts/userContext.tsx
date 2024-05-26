import axios from 'axios';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { getJwtFromCookie } from '@/ultils';

type UserHookReturn = {
    currentUser: UserType
    setCurrentUser: (user: UserType) => void
    loading: boolean
}

export type UserType = {
    username: string,
    email: string, 
    _id: string,
    isAdmin: string
}

export const currentUserContext = createContext<UserHookReturn>({} as UserHookReturn);


export const useCurrentUser = (): UserHookReturn =>
{
    return useContext(currentUserContext);
};


export const CurrentUserContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
    const [loading, setLoading] = useState<boolean>(true)

    const getMe = async () => {
        if (getJwtFromCookie() === null) return;
        try {
            const response = await axios.get("http://localhost:4000/users/profile", {headers: {Authorization: `${getJwtFromCookie()}`}});
            setCurrentUser(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        getMe().then(() => {setLoading(false)})
        
    }, [])
    
    return (
        <currentUserContext.Provider value={{currentUser, loading, setCurrentUser}}>
            {props.children}
        </currentUserContext.Provider>
    );
};