// src/app/layout.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>

        {children} {/* Page Content */}

      </body>
    </html>
  );
};

export default Layout;
