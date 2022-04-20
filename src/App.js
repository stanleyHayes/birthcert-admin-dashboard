import {Route, Routes} from "react-router";
import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
import {THEMES} from "./utils/themes";
import {ThemeProvider} from "@mui/styles";
import RequestsPage from "./pages/requests/requests-page";
import PaymentsPage from "./pages/payments/payments-page";
import ProfilePage from "./pages/account/profile-page";
import LoginPage from "./pages/authentication/login-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import EditProfilePage from "./pages/account/edit-profile-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import {CssBaseline} from "@mui/material";
import RequestDetailPage from "./pages/requests/request-detail-page";
import RequireAuth from "./components/shared/require-auth";
import ResetSuccessAcknowledgmentPage from "./components/shared/acknowledgment";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import RegistrationAcknowledgmentPage from "./pages/authentication/registration-acknowledgment-page";

function App() {

    return (
        <ThemeProvider theme={THEMES.darkTheme}>
            <CssBaseline/>
            <Routes>
                <Route element={
                    <RequireAuth>
                        <DashboardPage/>
                    </RequireAuth>
                } path="/"/>

                <Route element={<RequireAuth><RequestsPage/></RequireAuth>} path="/requests"/>
                <Route element={<RequireAuth><RequestDetailPage/></RequireAuth>} path="/requests/:requestID"/>

                <Route element={<RequireAuth><PaymentsPage/></RequireAuth>} path="/payments"/>

                <Route element={<RequireAuth><ProfilePage/></RequireAuth>} path="/profile"/>

                <Route element={<RequireAuth><EditProfilePage/></RequireAuth>} path="/edit-profile"/>

                <Route element={<RequireAuth><ChangePasswordPage/></RequireAuth>} path="/change-password"/>

                <Route element={<LoginPage/>} path="/auth/login"/>

                <Route element={<ResetSuccessAcknowledgmentPage/>} path="/reset-password/acknowledgment/success"/>

                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>

                <Route element={<VerifyAccountPage/>} path="/auth/verify/:token"/>

                <Route element={<RegistrationAcknowledgmentPage/>} path="/auth/verify/acknowledgment/success"/>

                <Route element={<ResetPasswordPage/>} path="/auth/reset-password/:token"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
