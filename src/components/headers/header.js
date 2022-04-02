import {AppBar, Hidden} from "@mui/material";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {

    return (
        <AppBar variant="elevation" elevation={0} color="primary">
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden mdUp={true}>
                <MobileHeader/>
            </Hidden>
        </AppBar>
    )
}

export default Header;
