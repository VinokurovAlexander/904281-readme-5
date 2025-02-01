// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Login } from '../pages/login';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}

export default App;
