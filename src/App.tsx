import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Router from "./Router";
import useAuth from "./composables/useAuth";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <Header />}
      <Router />
      {!isAuthenticated && <Footer />}
    </>
  );
};

export default App;
