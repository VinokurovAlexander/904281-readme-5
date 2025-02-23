import { Router } from './routes';
import { Provider } from 'react-redux';
import { store } from '../store';
import CssBaseline from '@mui/material/CssBaseline';

export function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <Router />
        </Provider>
    );
}

export default App;
