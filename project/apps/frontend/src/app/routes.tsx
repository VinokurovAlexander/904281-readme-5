import { Route, Routes } from 'react-router-dom';
import { Detail, Login, Popular, Signup } from '../pages';
import { AppRoute } from '../components';

export const Router = () => (
    <Routes>
        <Route path="*" element={<h2>404 not found</h2>} />
        <Route
            path="/login"
            element={
                <AppRoute>
                    <Login />
                </AppRoute>
            }
        />
        <Route
            path="/signup"
            element={
                <AppRoute>
                    <Signup />
                </AppRoute>
            }
        />
        <Route
            path="/"
            element={
                <AppRoute isProtected>
                    <Popular />
                </AppRoute>
            }
        />
        <Route
            path="/detail/:id"
            element={
                <AppRoute isProtected>
                    <Detail />
                </AppRoute>
            }
        />
    </Routes>
);
