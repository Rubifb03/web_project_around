import Header from "../components/Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";

export default function App() {
  return (
    <div>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
