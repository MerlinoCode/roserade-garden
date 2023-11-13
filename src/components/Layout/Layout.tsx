// Layout.tsx
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss'

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
    <section id="layout">
        <Navbar />
            <main className="main-content">{children}</main>
        <Footer />
    </section>
    );
};

export default Layout;
