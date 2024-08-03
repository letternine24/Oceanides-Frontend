import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Router from "./Router";
import Dashboard from "@pages/Dashboard/Index";
import UserRouter from "./UserRouter";

const App = () => {
  const isAuthenticated = true;
  return (
    <>
      {isAuthenticated ? (
        <>
          <UserRouter />
          {/* <Dashboard /> */}
        </>
      ) : (
        <>
          <Header />
          <Router />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
