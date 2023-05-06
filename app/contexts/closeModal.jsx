'use client'
import { createContext, useContext, useState } from "react";

const CloseModalContext = createContext();

export default function CloseModalProvider({ children }) {
    const [open, setOpen] = useState(false)
    return (
        <CloseModalContext.Provider value={{ open, setOpen }}>{children}</CloseModalContext.Provider>
    )
}

export const useCloseModal = () => useContext(CloseModalContext)