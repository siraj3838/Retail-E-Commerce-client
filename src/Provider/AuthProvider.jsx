import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const myAuth = {

    }
    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;