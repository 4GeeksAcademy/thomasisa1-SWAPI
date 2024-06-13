import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <h1>SWAPI Application</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Footer content here</p>
            </footer>
        </div>
    );
};

export default Layout;