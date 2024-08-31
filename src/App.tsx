import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Router from "./Router";
import useAuth from "./composables/useAuth"; // Import the custom hook
import CompaniesList from "./CompaniesList";

const App = () => {
  const { isAuthenticated } = useAuth(); // Use the composable to get auth state

  return (
    <>
      {!isAuthenticated && <Header />}
      {/* Add Sample call to API */}
      <CompaniesList />
      <Router />
      {!isAuthenticated && <Footer />}
    </>
  );
};

export default App;
