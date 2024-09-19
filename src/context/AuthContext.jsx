import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, role) => {
        const userData = { username, role };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    const hasRole = (role) => {
        return user?.role === role;
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout, isAuthenticated, hasRole }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
