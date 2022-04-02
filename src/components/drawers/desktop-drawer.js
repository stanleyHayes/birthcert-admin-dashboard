import {Box, Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    Dashboard,
    DashboardOutlined, DriveFileMove, DriveFileMoveOutlined,
    Face,
    FaceOutlined, Payment, PaymentOutlined,
    Settings,
    SettingsOutlined, SwapVerticalCircle, SwapVerticalCircleOutlined, Telegram,
    VerifiedUser, VerifiedUserOutlined
} from "@mui/icons-material";

const DesktopDrawer = () => {

    const {pathname} = useLocation();

    return (
        <Box py={2}>
            <Stack mb={2} direction="column">
                <Typography sx={{color: 'text.link', pl: 4}} variant="h5">e-BCert</Typography>
            </Stack>
            <Divider orientation="horizontal" light={true} variant="middle"/>
            <Stack mt={2} direction="column" spacing={1}>
                <SidebarLink
                    icon={
                        pathname === '/' ?
                            <Dashboard sx={{color: 'text.link'}}/> :
                            <DashboardOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/"
                    label="Dashboard"
                    active={pathname === '/'}
                />
                <SidebarLink
                    icon={
                        pathname === '/requests' ?
                            <SwapVerticalCircle sx={{color: 'text.link'}}/> :
                            <SwapVerticalCircleOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/requests"
                    label="Requests"
                    active={pathname === '/requests'}
                />
                <SidebarLink
                    icon={
                        pathname === '/payments' ?
                            <Payment sx={{color: 'text.link'}}/> :
                            <PaymentOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/payments"
                    label="Payments"
                    active={pathname === '/payments'}
                />

                <SidebarLink
                    icon={
                        pathname === '/birth-certificates' ?
                            <DriveFileMove sx={{color: 'text.link'}}/> :
                            <DriveFileMoveOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/birth-certificates"
                    label="Birth Certificates"
                    active={pathname === '/birth-certificates'}
                />

                <SidebarLink
                    icon={
                        pathname === '/admins' ?
                            <VerifiedUser sx={{color: 'text.link'}}/> :
                            <VerifiedUserOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/admins"
                    label="Admins"
                    active={pathname === '/admins'}
                />


                <SidebarLink
                    icon={
                        pathname === '/settings' ?
                            <Settings sx={{color: 'text.link'}}/> :
                            <SettingsOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/settings"
                    label="Settings"
                    active={pathname === '/settings'}
                />

                <SidebarLink
                    icon={
                        pathname === '/profile' ?
                            <Face sx={{color: 'text.link'}}/> :
                            <FaceOutlined sx={{color: 'text.secondary'}}/>
                    }
                    path="/profile"
                    label="Profile"
                    active={pathname === '/profile'}
                />
            </Stack>
        </Box>
    )
}

export default DesktopDrawer;
