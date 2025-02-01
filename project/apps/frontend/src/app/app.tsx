import { FC, ReactNode, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main, Popular } from '../pages';

interface ProtectedRouteProps {
    isAuth: boolean;
    children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to={'/'} replace />;
    }

    return children;
};

export function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Routes>
            <Route path="*" element={<h2>404 not found</h2>} />
            <Route path="/" element={<Main setIsAuth={setIsAuth} />} />
            <Route
                path="/popular"
                element={
                    <ProtectedRoute isAuth={isAuth}>
                        <Popular />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
