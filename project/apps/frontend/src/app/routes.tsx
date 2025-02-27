import { Navigate, Route, Routes } from 'react-router-dom';
import { Detail, Login, Popular, Signup } from '../pages';
import { FC, ReactNode } from 'react';
import { selectUser, useAppSelector } from '../store';
import { AuthProvider } from '../components/AuthProvider';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const user = useAppSelector(selectUser);

    if (!user) {
        return <Navigate to={'/login'} replace />;
    }

    return children;
};

export const Router = () => (
    <AuthProvider>
        <Routes>
            <Route path="*" element={<h2>404 not found</h2>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Popular />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/detail/:id"
                element={
                    <ProtectedRoute>
                        <Detail />
                    </ProtectedRoute>
                }
            />
        </Routes>
    </AuthProvider>
);
