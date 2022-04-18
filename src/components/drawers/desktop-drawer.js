import {Box, Button,  Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    Apartment,
    ApartmentOutlined,
    Business,
    BusinessOutlined,
    CorporateFare,
    CorporateFareOutlined,
    Dashboard,
    DashboardOutlined,
    Edit,
    EditOutlined,
    ExitToApp,
    Face,
    FaceOutlined,
    Lock,
    LockOutlined,
} from "@mui/icons-material";
import React from "react";

const DesktopDrawer = () => {
    const {pathname} = useLocation();

    return (
        <Box sx={{paddingY: 2, height: '100%'}}>
            <Box
                sx={{
                    display: 'flex', height: '100%', flexDirection: 'column'
                }}>
                <Stack sx={{flexGrow: 1, pl: 4}} direction="column" spacing={2}>
                    <Box>
                        <SidebarLink
                            icon={pathname === '/' ? <Dashboard color='secondary'/> : <DashboardOutlined/>}
                            active={pathname === '/'}
                            label="Dashboard"
                            path="/"
                        />
                    </Box>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/birth-certificates' ? <CorporateFare color='secondary'/> :
                                <CorporateFareOutlined/>}
                            active={pathname === '/birth-certificates'}
                            label="Birth Certificates"
                            path="/birth-certificates"
                        />
                    </Box>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/requests' ? <Apartment color='secondary'/> : <ApartmentOutlined/>}
                            active={pathname === '/requests'}
                            label="Requests"
                            path="/requests"
                        />
                    </Box>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/payments' ? <Business color='secondary'/> : <BusinessOutlined/>}
                            active={pathname === '/payments'}
                            label="Payments"
                            path="/payments"
                        />
                    </Box>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/profile' ? <Face color='secondary'/> : <FaceOutlined/>}
                            active={pathname === '/profile'}
                            label="Profile"
                            path="/profile"
                        />
                    </Box>
                </Stack>

                <Divider light={true} sx={{my: 2}} variant="fullWidth"/>

                <Stack sx={{pl: 4}} spacing={2} direction="column">
                    <Typography variant="body2">Account</Typography>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/edit-profile' ? <Edit color='secondary'/> : <EditOutlined/>}
                            active={pathname === '/edit-profile'}
                            label="Edit Profile"
                            path="/edit-profile"
                        />
                    </Box>

                    <Box>
                        <SidebarLink
                            icon={pathname === '/change-password' ? <Lock color='secondary'/> : <LockOutlined/>}
                            active={pathname === '/change-password'}
                            label="Change Password"
                            path="/change-password"
                        />
                    </Box>

                    <Box>
                        <Button
                            sx={{
                                borderWidth: 2,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 0,
                                textTransform: 'capitalize',
                                cursor: 'pointer',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: 'light.secondary',
                                    color: 'secondary.main',
                                    transition: 'all 500ms 150ms ease-in-out',
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: 'secondary.main',
                                },
                                '&:focus': {
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: 'secondary.main',
                                    backgroundColor: 'light.secondary',
                                    color: 'secondary.main'
                                },
                                '&:active': {
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: 'secondary.main',
                                    backgroundColor: 'light.secondary',
                                    color: 'secondary.main'
                                }
                            }}
                            startIcon={<ExitToApp/>}
                            variant="outlined"
                            color="secondary">Logout</Button>
                    </Box>
                </Stack>
            </Box>
        </Box>)
}

export default DesktopDrawer;
