import { Navigate, Route, Routes } from 'react-router-dom';
import { Detail, Main, Popular, Signup } from '../pages';
import { FC, ReactNode } from 'react';
import { selectIsUser, useAppSelector } from '../store';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const user = useAppSelector(selectIsUser);

    if (!user) {
        return <Navigate to={'/'} replace />;
    }

    return children;
};

export const Router = () => (
    <Routes>
        <Route path="*" element={<h2>404 not found</h2>} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route
            path="/popular"
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
);
