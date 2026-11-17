import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import Footer from "../../components/Layout/Footer";

// A reusable layout component that accepts nested content via the `children` prop
export function Day5PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <div className="content-container" style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

// Default export showing an example usage of the layout for Day 5
export default function PageLayoutChallenge() {
  return (
    <Day5PageLayout>
      <h2>Day 5 Challenge: PageLayout & Children Prop</h2>
      <p>This content is dynamically passed into the PageLayout component using children!</p>
    </Day5PageLayout>
  );
}