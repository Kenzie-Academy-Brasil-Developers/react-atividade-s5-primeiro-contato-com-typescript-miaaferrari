import { createContext, useState, useContext, ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

interface User {
    name: string;
    age: number;
    hobby: string;
}

interface ProvidersData {
    list: User[];
    newUser: User;
    createNewUser: (user: User) => void;
}

const ListContext = createContext<ProvidersData>({} as ProvidersData);

export const useList = () => {
    const context = useContext(ListContext);
    return context;
}

export const ListProvider = ({ children }: ProvidersProps) => {
    const [list, setList] = useState<User[]>([]);
    const [newUser, setNewUser] = useState<User>({} as User);

    const createNewUser = (user: User) => {
        setNewUser(user);
        setList([...list, user]);
        console.log(list)
    }

    return (
        <ListContext.Provider value={{ createNewUser, newUser, list }}>
            {children}
        </ListContext.Provider>)
}