import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Router from "./Router";
import useAuth from "./composables/useAuth";
import TestApi from "./TestApi";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <Header />}
      <Router />
      {/* REMOVE TEST API TO IF NOT GOING TO USE */}
      <TestApi />
      {!isAuthenticated && <Footer />}
    </>
  );
};

export default App;
