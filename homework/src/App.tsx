import "./globals.css";
import MoviesLandingPage from "./components/MoviesLandingPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
     <MoviesLandingPage />
     <ToastContainer position="bottom-right" autoClose={3000} />

    </>
  );
}

export default App
