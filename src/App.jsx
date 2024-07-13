import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
