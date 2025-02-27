import About from "../components/Pages/About/About";
import Cart from "../components/Pages/Cart/Cart";
import Checkout from "../components/Pages/Checkout/Checkout";
import Contact from "../components/Pages/Contact/Contact";
import FAQs from "../components/Pages/FAQs/FAQs";
import Help from "../components/Pages/Help/Help";
import Home from "../components/Pages/Home/Home";
import Shop from "../components/Pages/Shop/Shop";
import ShopDetails from "../components/Pages/ShopDetails/ShopDetails";
import Wishlist from "../components/Pages/Wishlist/Wishlist";
import ErrorPage from "../components/Common/ErrorPage";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import ChangePassword from "../components/Auth/ChangePassword";
import UserAccount from "../components/Pages/Account/UserAccount";
import ForgetPassword from "../components/Auth/ForgetPassword";
import ResetPassword from "../components/Auth/ResetPassword";
import UserOrders from "../components/Pages/MyOrders/UserOrders";
import BackToHome from "../components/Common/BackToHome";

export const routesObject = [
    {
        id: 1,
        path: '/',
        element:<Home />,
        name: 'Home',
        layout: true,
        isAuth: false
    },
    {
        id: 2,
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorPage />,
        name: 'Shops',
        layout: true,
        isAuth: false
    },
    {
        id: 3,
        path: 'shop/:id',
        element: <ShopDetails />,
        errorElement: <ErrorPage />,
        name: 'ShoppingDetails',
        layout: true,
        isAuth: false
    },
    {
        id: 4,
        path: 'checkout',
        element: <Checkout />,
        name: 'Checkout',
        layout: true,
        isAuth: true,
    },
    {
        id: 5,
        path: 'contact',
        element: <Contact />,
        name: 'Contact',
        layout: true,
        isAuth: false
    },
    {
        id: 6,
        path: 'about',
        element: <About />,
        name: 'About',
        layout: true,
        isAuth: false


    },
    {
        id: 7,
        path: 'help',
        element: <Help />,
        name: 'Help',
        layout: true,
        isAuth: false
    },
    {
        id: 8,
        path: 'faqs',
        element: <FAQs />,
        name: 'Faqs',
        layout: true,
        isAuth: false
    },
    {
        id: 9,
        path: 'cart',
        element: <Cart />,
        name: 'Cart',
        layout: true,
        isAuth: true
    },
    {
        id: 10,
        path: 'wishlist',
        element: <Wishlist />,
        name: 'wishlist',
        layout: true,
        isAuth: true
    },
    {
        id: 11,
        path: 'signup',
        element: <SignUp />,
        name: 'SignUp',
        layout: true,
        isAuth: false,
        isLoggedIn: true
    },
    {
        id: 12,
        path: 'signin',
        element: <SignIn />,
        name: 'SignIn',
        layout: true,
        isAuth: false,
        isLoggedIn: true
    },
    {
        id: 13,
        path: 'forget-password',
        element: <ForgetPassword />,
        name: 'ForgetPassword',
        layout: true,
        isAuth: false

    },
    {
        id: 14,
        path: 'reset-password',
        element: <ResetPassword />,
        name: 'ResetPassword',
        layout: true,
        isAuth: false
    },
    {
        id: 15,
        path: 'account',
        element: <UserAccount />,
        name: 'MyAccount',
        layout: true,
        isAuth: true
    },
    {
        id: 16,
        path: 'change-password',
        element: <ChangePassword />,
        name: 'MyAccount',
        layout: true,
        isAuth: true
    },
    {
        id: 17,
        path: 'my-order',
        element: <UserOrders />,
        name: 'MyOrder',
        layout: true,
        isAuth: true
    },
    {
        id: 18,
        path: 'back',
        element: <BackToHome/>,
        name: 'MyOrder',
        layout: true,
        isAuth: false
    },
]
