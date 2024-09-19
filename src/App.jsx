import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicPage from "./components/PublicPage";
import ProtectedPage from "./components/ProtectedPage";
import PrivatePage from "./components/PrivatePage";
import ProfilePage from "./components/ProfilePage";
import AdminPage from "./components/AdminPage";
import UserManagementPage from "./components/UserManagementPage";
import AccountSettingsPage from "./components/AccountSettingsPage";
import ProductManagementPage from "./components/ProductManagementPage";
import ReportsPage from "./components/ReportsPage";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import "./styles.css";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    {/* Route publique */}
                    <Route path='/' element={<PublicPage />} />

                    {/* Route de connexion */}
                    <Route path='/login' element={<LoginPage />} />

                    {/* Route protégée (accessible uniquement aux utilisateurs authentifiés) */}
                    <Route
                        path='/protected'
                        element={
                            <ProtectedRoute>
                                <ProtectedPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Route privée (accessible uniquement aux administrateurs) */}
                    <Route
                        path='/private'
                        element={
                            <PrivateRoute role='admin'>
                                <PrivatePage />
                            </PrivateRoute>
                        }
                    />

                    {/* Route de profil utilisateur (accessible uniquement aux utilisateurs authentifiés) */}
                    <Route
                        path='/profile'
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Route de gestion des utilisateurs (accessible uniquement aux utilisateurs authentifiés) */}
                    <Route
                        path='/user-management'
                        element={
                            <ProtectedRoute>
                                <UserManagementPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Route de paramètres du compte (accessible uniquement aux utilisateurs authentifiés) */}
                    <Route
                        path='/account-settings'
                        element={
                            <ProtectedRoute>
                                <AccountSettingsPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Route d'administration (accessible uniquement aux administrateurs) */}
                    <Route
                        path='/admin'
                        element={
                            <PrivateRoute role='admin'>
                                <AdminPage />
                            </PrivateRoute>
                        }
                    />

                    {/* Route de gestion des produits (accessible uniquement aux administrateurs) */}
                    <Route
                        path='/product-management'
                        element={
                            <PrivateRoute role='admin'>
                                <ProductManagementPage />
                            </PrivateRoute>
                        }
                    />

                    {/* Route de rapports (accessible uniquement aux administrateurs) */}
                    <Route
                        path='/reports'
                        element={
                            <PrivateRoute role='admin'>
                                <ReportsPage />
                            </PrivateRoute>
                        }
                    />

                    {/* Route pour 404 */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
