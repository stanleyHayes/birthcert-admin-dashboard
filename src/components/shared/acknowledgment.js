import {Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ResetSuccessAcknowledgmentPage = () => {
    return (
        <Box>
            <Container>
                <Card elevation={1} variant="elevation">
                    <CardContent>
                        <Typography variant="h4" align="center">Success</Typography>

                        <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                        <Box mb={4}>
                            <Grid container={true} mb={4} justifyContent="center">
                                <Grid item={true}>
                                    <Avatar src="/assets/images/success.png" sx={{width: 40, height: 40}}/>
                                </Grid>
                            </Grid>

                            <Typography mb={2} gutterBottom={true} variant="h6" align="center">
                                Check email for reset link
                            </Typography>

                        </Box>

                        <Grid container={true} justifyContent="center">
                            <Grid item={true} xs={12} md="auto">
                                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        sx={{
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                            backgroundColor: 'primary.main',
                                            color: 'secondary.main',
                                            '&:hover': {
                                                color: 'secondary.main'
                                            },
                                            '&:focus': {
                                                color: 'secondary.main'
                                            },
                                            '&:active': {
                                                color: 'secondary.main'
                                            },
                                        }}
                                        size="large"
                                        variant="contained"
                                        disableElevation={true}
                                        fullWidth={true}>
                                        Go to login
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default ResetSuccessAcknowledgmentPage;
