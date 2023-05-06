import CloseModalProvider from "./closeModal";

export default function Providers({ children }) {
    return (
        <CloseModalProvider>
            {children}
        </CloseModalProvider>
    )
}
