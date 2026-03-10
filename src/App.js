import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./assets/lib/animate/animate.min.css"
import './assets/css/style.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-loading-skeleton/dist/skeleton.css";

import RoutesPath from './Routes/RoutesPath';
import { ToastContainer } from 'react-toastify';

function App() {
  //  const { refetch} = useGetUserDataQuery()

  //   useEffect(() => {
  //     const getProfile = () => {
  //       if (localStorage.getItem("token")) {
  //         // call profile api
  //         refetch()
  //       }
  //     }
  //     getProfile();
  //   },[])

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
