import {createContext, ReactNode, useContext, useState} from "react";

const EditContext = createContext({
    isEditing: false,
    start: () => {},
    end: () => {}
});

type Props = {
    children: ReactNode
}

export const useEditContext = () => {
    return useContext(EditContext)
}

export default function EditProvider ({children}: Props) {
    const [isEditing, setEditing] = useState(false);

    const start = () => setEditing(true);
    const end = () => setEditing(false);

    return (
        <EditContext.Provider value={{isEditing, start, end}}>
            {children}
        </EditContext.Provider>
    )
}