import {Route, Routes} from "react-router-dom";
import {useLocation} from "react-router";
import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
import {CONSTANTS} from "./constants/constants";
import {THEMES} from "./utils/themes";
import {ThemeProvider} from "@mui/styles";
import AdminsPage from "./pages/admins/admins-page";
import RequestsPage from "./pages/requests/requests-page";
import SettingsPage from "./pages/account/settings-page";
import BirthCertificatesPage from "./pages/birth-certificates/birth-certificates-page";
import PaymentsPage from "./pages/payments/payments-page";
import ProfilePage from "./pages/account/profile-page";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "./redux/ui/ui-action-creators";
import LoginPage from "./pages/authentication/login-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";

function App() {

    const variant = localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY)) : 'dark';

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname)
            dispatch(UI_ACTION_CREATORS.changeURL(pathname))
    }, [dispatch, pathname]);

    return (
        <ThemeProvider theme={variant === 'light' ? THEMES.darkTheme : THEMES.lightTheme}>
            <Routes>
                <Route element={<DashboardPage/>} path="/"/>

                <Route element={<AdminsPage/>} path="/admins"/>

                <Route element={<RequestsPage/>} path="/requests"/>

                <Route element={<SettingsPage/>} path="/settings"/>

                <Route element={<BirthCertificatesPage/>} path="/birth-certificates"/>

                <Route element={<PaymentsPage/>} path="/payments"/>

                <Route element={<ProfilePage/>} path="/profile"/>

                <Route element={<LoginPage/>} path="/auth/login"/>

                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>

                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
