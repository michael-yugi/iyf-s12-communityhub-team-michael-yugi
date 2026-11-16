
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  return (
    <div className="page-layout">

      <Header />

      <div className="main-content">
        <Sidebar />

        <main className="content">
          {children}
        </main>
      </div>

      <Footer />

    </div>
  );
}

export default PageLayout;
