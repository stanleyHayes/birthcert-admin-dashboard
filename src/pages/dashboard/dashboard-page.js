import Layout from "../../components/layout/layout";
import {Box, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography mb={4} variant="h4">Requests</Typography>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography gutterBottom={true} variant="h2" align="center">
                                            8
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
                                            8
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
                                            8
                                        </Typography>
                                        <Typography variant="body2" align="center">
                                            Sent
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography mb={4} variant="h4">Payments</Typography>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12} md={6}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography gutterBottom={true} variant="h2" align="center">
                                            8
                                        </Typography>
                                        <Typography variant="body2" align="center">
                                            Verified
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item={true} xs={12} md={6}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography gutterBottom={true} variant="h2" align="center">
                                            8
                                        </Typography>
                                        <Typography variant="body2" align="center">
                                            Pending
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography mb={4} variant="h4">Birth Certificates</Typography>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography gutterBottom={true} variant="h2" align="center">
                                            8
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
                                            8
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
                                            8
                                        </Typography>
                                        <Typography variant="body2" align="center">
                                            Sent
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Layout>
    )
}

export default DashboardPage;
