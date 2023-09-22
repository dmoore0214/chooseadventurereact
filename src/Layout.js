import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/app">Home</Link>
                </li>
                <li>
                    <Link to="/start">Start Game</Link>
                </li>
                <li>
                    <Link to="/continue">Continue Game</Link>
                </li>
            </ul>
            </nav>

            <Outlet />
            </>
    )
};

export default Layout;