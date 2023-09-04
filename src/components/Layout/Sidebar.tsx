const Sidebar = () => {
return (
    <aside className="sidebar">
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
    </aside>
);
};

export default Sidebar;
