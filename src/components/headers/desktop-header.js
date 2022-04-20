import {Avatar, Button, Container, Grid, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {Face, KeyboardArrowDown} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/auth-action-creators";
import {useNavigate} from "react-router";

const DesktopHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            },
            dropDownLink: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            }
        }
    });

    const classes = useStyles();

    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getInitials = name => {
        const names = name.split(' ');
        if (names.length === 0)
            return 'A';
        else if (names.length === 1)
            return names[0][0];
        else return `${names[0][0]}${names[1][0]}`
    }

    const {authData} = useSelector(selectAuth);

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    return (
        <Toolbar variant="regular">
            <Container>
                <Grid container={true} alignItems="center" justifyContent="space-around">
                    <Grid item={true} lg={3}>
                        <Link to="/" className={classes.link}>
                            <Typography sx={{color: 'secondary.main'}} variant="h4">
                                Birth Registry
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid
                        item={true}
                        alignItems="center"
                        container={true}
                        lg={9}
                        spacing={2}
                        justifyContent="flex-end">
                        <Grid item={true}>
                            <Avatar
                                sx={{
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: 'secondary.main',
                                    backgroundColor: 'primary.main'
                                }}
                                variant="circular">
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    variant="body1">
                                    {authData && getInitials(authData.name)}
                                </Typography>
                            </Avatar>
                        </Grid>
                        <Grid item={true}>
                            <Button
                                sx={{textTransform: 'capitalize'}}
                                color="secondary"
                                onClick={handleMenuClick}
                                endIcon={<KeyboardArrowDown color="secondary"/>}
                                size="large" variant="text">
                                {authData && authData.name}
                            </Button>
                            <Menu elevation={1}  open={menuOpen} onClose={handleMenuClose} anchorEl={anchorEl}>
                                <MenuItem>
                                    <Link to="/profile" className={classes.dropDownLink}>
                                        <Button
                                            fullWidth={true}
                                            startIcon={<Face color="secondary" />}
                                            variant="text"
                                            sx={{
                                                textTransform: 'capitalize',
                                                color: 'secondary.main',
                                                justifyContent: 'flex-start'
                                        }}
                                            size="large">Profile</Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Grid>
                        <Grid item={true}>
                                <Button
                                    onClick={() => dispatch(AUTH_ACTION_CREATORS.logout(token, navigate))}
                                    color="secondary"
                                    size="medium"
                                    variant="outlined"
                                    sx={{
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                        }
                                    }}>
                                    Logout
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader
