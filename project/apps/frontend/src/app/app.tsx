import { Router } from './routes';
import { Provider } from 'react-redux';
import { store } from '../store';
import CssBaseline from '@mui/material/CssBaseline';
import { Snackbar } from '../components';

export function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <Router />
            <Snackbar />
        </Provider>
    );
}

export default App;
