import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css"
import './assets/css/style.css';
import RoutesPath from './Routes/RoutesPath';
import { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <RoutesPath />
    </>
  );
}

export default App;
