import { authService } from '../fbase';
import AppRouter from './Router';
import React, { useState } from 'react';
function App() {
    const [isLoggIn, setIsLoggIn] = useState(authService.currentUser);

    return (
        <>
            <AppRouter isLoggIn={isLoggIn} />
            <footer>&copy; {new Date().getFullYear()}Nwitter </footer>
        </>
    );
}

export default App;
