// Layout.tsx
import { ReactNode } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
    <section id="layout">
        <Header />
        <Sidebar />
            <main className="main-content">{children}</main>
        <Footer />
    </section>
    );
};

export default Layout;
