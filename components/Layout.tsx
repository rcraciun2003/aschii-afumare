import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="max-w-screen-2xl mx-auto">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;