import {Box, Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {Dashboard, DashboardOutlined} from "@mui/icons-material";

const MobileDrawer = () => {

    const {pathname} = useLocation();

    return (
        <Box py={2} sx={{minWidth: '60vw'}}>
            <Stack mb={2} direction="column" ml={4}>
                <Typography color="primary" variant="body2">Birth & Death Registry</Typography>
            </Stack>
            <Divider orientation="horizontal" light={true} variant="middle"/>
            <Stack mt={2} direction="column" spacing={1} ml={4}>
                <SidebarLink
                    icon={
                        pathname === '/' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/"
                    label="Dashboard"
                    active={pathname === '/'}
                />
                <SidebarLink
                    icon={
                        pathname === '/birth-certificates' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/transactions"
                    label="Transactions"
                    active={pathname === '/birth-certificates'}
                />
                <SidebarLink
                    icon={
                        pathname === '/clients' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/bank-accounts"
                    label="Bank Accounts"
                    active={pathname === '/clients'}
                />

                <SidebarLink
                    icon={
                        pathname === '/requests' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/funds"
                    label="Funds"
                    active={pathname === '/requests'}
                />

                <SidebarLink
                    icon={
                        pathname === '/invitations' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/invitations"
                    label="Invitations"
                    active={pathname === '/invitations'}
                />

                <SidebarLink
                    icon={
                        pathname === '/birth-certificates' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/permissions"
                    label="Permissions"
                    active={pathname === '/birth-certificates'}
                />

                <SidebarLink
                    icon={
                        pathname === '/settings' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/users"
                    label="Users"
                    active={pathname === '/settings'}
                />

                <SidebarLink
                    icon={
                        pathname === '/admins' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/admins"
                    label="Admins"
                    active={pathname === '/admins'}
                />

                <SidebarLink
                    icon={
                        pathname === '/payments' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/information"
                    label="Information"
                    active={pathname === '/payments'}
                />

                <SidebarLink
                    icon={
                        pathname === '/settings' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/settings"
                    label="Settings"
                    active={pathname === '/settings'}
                />

                <SidebarLink
                    icon={
                        pathname === '/profile' ?
                            <Dashboard sx={{color: 'primary.main'}}/> :
                            <DashboardOutlined sx={{color: 'secondary.main'}}/>
                    }
                    path="/profile"
                    label="Profile"
                    active={pathname === '/profile'}
                />
            </Stack>
        </Box>
    )
}

export default MobileDrawer;
