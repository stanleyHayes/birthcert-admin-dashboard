import {Box, Button, Divider, Grid, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    Dashboard,
    DashboardOutlined,
    Edit,
    EditOutlined, ExitToApp, Face, FaceOutlined,
    Lock,
    LockOutlined,
    Paid,
    PaidOutlined
} from "@mui/icons-material";
import React from "react";

const MobileDrawer = () => {

    const {pathname} = useLocation();

    return (
        <Box
            sx={{
                minWidth: '80vw',
                backgroundColor: 'background.default',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <Typography sx={{ml: 4, my: 1}} color="secondary" variant="h6">Birth Registry</Typography>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'background.default',
                }}>
                <Stack mt={2} direction="column" spacing={1} ml={4}>
                    <SidebarLink
                        icon={
                            pathname === '/' ?
                                <Dashboard sx={{color: 'secondary.main'}}/> :
                                <DashboardOutlined/>
                        }
                        path="/"
                        label="Dashboard"
                        active={pathname === '/'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/payments' ?
                                <Paid sx={{color: 'secondary.main'}}/> :
                                <PaidOutlined/>
                        }
                        path="/payments"
                        label="Payments"
                        active={pathname === '/payments'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/requests' ?
                                <Dashboard sx={{color: 'secondary.main'}}/> :
                                <DashboardOutlined/>
                        }
                        path="/requests"
                        label="Requests"
                        active={pathname === '/requests'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/profile' ?
                                <Face sx={{color: 'secondary.main'}}/> :
                                <FaceOutlined/>
                        }
                        path="/profile"
                        label="Profile"
                        active={pathname === '/profile'}
                    />
                </Stack>

                <Stack mt={2} mb={2} direction="column" spacing={1} ml={4}>
                    <SidebarLink
                        icon={
                            pathname === '/change-password' ?
                                <Lock sx={{color: 'secondary main'}}/> :
                                <LockOutlined/>
                        }
                        path="/change-password"
                        label="Change Password"
                        active={pathname === '/change-password'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/edit-profile' ?
                                <Edit sx={{color: 'secondary.main'}}/> :
                                <EditOutlined/>
                        }
                        path="/edit-profile"
                        label="Edit Profile"
                        active={pathname === '/edit-profile'}
                    />

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
        </Box>
    )
}

export default MobileDrawer;
