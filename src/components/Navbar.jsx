import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            <Link to='/'>Accueil</Link>
            {user ? (
                <>
                    <Link to='/protected'>Protégée</Link>
                    <Link to='/profile'>Profil</Link>
                    <Link to='/user-management'>Gestion des Utilisateurs</Link>
                    <Link to='/account-settings'>Paramètres du Compte</Link>
                    {user.role === "admin" && (
                        <>
                            <Link to='/admin'>Admin</Link>
                            <Link to='/product-management'>
                                Gestion des Produits
                            </Link>
                            <Link to='/reports'>Rapports</Link>
                        </>
                    )}
                    <button onClick={logout}>Déconnexion</button>
                </>
            ) : (
                <Link to='/login'>Connexion</Link>
            )}
        </nav>
    );
};

export default Navbar;
