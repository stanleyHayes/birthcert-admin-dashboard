import Layout from "../../components/layout/layout";
import {Box, Card, CardContent, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import {useEffect} from "react";
import {DASHBOARD_ACTION_CREATORS} from "../../redux/dashboard/dashboard-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 16
                },
                [theme.breakpoints.up('md')]: {
                    paddingTop: 32,
                    paddingBottom: 32,
                }
            }
        }
    });

    const classes = useStyles();

    const {dashboard, dashboardLoading, dashboardError} = useSelector(selectDashboard);

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    useEffect(() => {
        dispatch(DASHBOARD_ACTION_CREATORS.getDashboard(token))
    }, [token, dispatch]);

    return (<Layout>
        {dashboardLoading && <LinearProgress variant="query" color="secondary"/>}
        <Container className={classes.container}>
            {dashboardError && (<Alert severity="error" sx={{py: 4}}>
                <AlertTitle>
                    {dashboardError}
                </AlertTitle>
            </Alert>)}
            <Stack direction="column" spacing={4}>
                <Box>
                    <Typography mb={4} variant="h4">Requests</Typography>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.request?.pending}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Pending
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.request?.completed}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Completed
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.request?.delivered}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Delivered
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Typography mb={4} variant="h4">Payments</Typography>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.payment?.verified}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Verified
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.payment?.pending}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Pending
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={1}>
                                <CardContent>
                                    <Typography gutterBottom={true} variant="h2" align="center">
                                        {dashboard?.payment?.waived}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Waived
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Container>
    </Layout>)
}

export default DashboardPage;
