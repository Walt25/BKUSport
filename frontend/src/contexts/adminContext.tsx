import axios from 'axios';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { UserType, useCurrentUser } from './userContext';
import { getJwtFromCookie } from '@/ultils';

type AdminHookReturn = {
    allUsers: UserType[]
    adminLoading: boolean
    deleteUser: (id: string) => void
    updateUser: (id: string, username: string, email: string) => Promise<{status: number, message: string}>

}

export const adminContext = createContext<AdminHookReturn>({} as AdminHookReturn);


export const useAdmin = (): AdminHookReturn =>
{
    return useContext(adminContext);
};


export const AdminContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [allUsers, setAllUsers] = useState<UserType[]>([]);
    const [adminLoading, setAdminLoading] = useState<boolean>(true)
    const {currentUser} = useCurrentUser()

    const getAllUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/users", {headers: {Admin: `${currentUser.isAdmin}`, Authorization: `${getJwtFromCookie()}`}});
            setAllUsers(response.data.users)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteUser = async (id: string) => {
        setAdminLoading(true)
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`, {headers: {Admin: `${currentUser.isAdmin}`, Authorization: `${getJwtFromCookie()}`}});
            getAllUsers()
            setAdminLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    const updateUser = async (id: string, username: string, email: string): Promise<{status: number, message: string}>=> {
        setAdminLoading(true)
        try {
            await axios.put(`http://localhost:5000/api/users/${id}`, {
                username, email
            },  {headers: {Admin: `${currentUser.isAdmin}`, Authorization: `${getJwtFromCookie()}`}});
            getAllUsers()
            setAdminLoading(false)
            return {status: 200, message: 'Update success'}
        } catch (error) {
            return {status: 401, message: 'Something error'}
        }
    }


    useEffect(() => {
        setAdminLoading(true);
        getAllUsers()
        .then(() => {setAdminLoading(false)})
    }, [])

    return (
        <adminContext.Provider value={{adminLoading, allUsers, deleteUser, updateUser}}>
            {props.children}
        </adminContext.Provider>
    );
};