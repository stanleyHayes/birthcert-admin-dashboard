import {Box, SwipeableDrawer} from "@mui/material";
import DesktopDrawer from "../drawers/desktop-drawer";
import MobileDrawer from "../drawers/mobile-drawer";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import Header from "../headers/header";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";

const Layout = ({children}) => {

    const {isToggled} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    maxWidth: '100vw',
                    paddingTop: 8,
                    backgroundColor: 'background.default'
            }}>
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        flexBasis: {
                            xs: '0%',
                            sm: '0%',
                            md: '25%',
                            lg: '15%'
                        },
                        backgroundColor: 'background.paper',
                        maxHeight: '100vh',
                        display: {xs: "none", md: "block"}
                    }}>
                    <DesktopDrawer/>
                </Box>
                <Box sx={{flexGrow: 1, backgroundColor: "background.default"}}>
                    <Header />
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <MobileDrawer/>
            </SwipeableDrawer>
        </Box>


    )
}

export default Layout;
