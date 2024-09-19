import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        login(username, role);
        navigate("/protected");
    };

    return (
        <div>
            <h1>Connexion</h1>
            <input
                type='text'
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value='user'>Utilisateur</option>
                <option value='admin'>Administrateur</option>
            </select>
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
};

export default LoginPage;
