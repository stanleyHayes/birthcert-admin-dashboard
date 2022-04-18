import {Route, Routes} from "react-router";
import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
import {THEMES} from "./utils/themes";
import {ThemeProvider} from "@mui/styles";
import AdminsPage from "./pages/admins/admins-page";
import RequestsPage from "./pages/requests/requests-page";
import BirthCertificatesPage from "./pages/birth-certificates/birth-certificates-page";
import PaymentsPage from "./pages/payments/payments-page";
import ProfilePage from "./pages/account/profile-page";
import LoginPage from "./pages/authentication/login-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import EditProfilePage from "./pages/account/edit-profile-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import {CssBaseline} from "@mui/material";

function App() {

    return (
        <ThemeProvider theme={THEMES.darkTheme}>
            <CssBaseline/>
            <Routes>
                <Route element={<DashboardPage/>} path="/"/>

                <Route element={<AdminsPage/>} path="/admins"/>

                <Route element={<RequestsPage/>} path="/requests"/>

                <Route element={<BirthCertificatesPage/>} path="/birth-certificates"/>

                <Route element={<PaymentsPage/>} path="/payments"/>

                <Route element={<ProfilePage/>} path="/profile"/>

                <Route element={<EditProfilePage/>} path="/edit-profile"/>

                <Route element={<ChangePasswordPage/>} path="/change-password"/>

                <Route element={<LoginPage/>} path="/auth/login"/>

                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>

                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
