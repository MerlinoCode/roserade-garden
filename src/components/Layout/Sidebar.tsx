import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const { pathname } = useLocation();
    if (pathname === "/") {
        return <aside className="sidebar">
        <nav className="sidebar-nav">
            <ul className="sidebar-links">
                <li>
                    <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    </aside>;
      }
    return (
        <></>
    );
};

export default Sidebar;
