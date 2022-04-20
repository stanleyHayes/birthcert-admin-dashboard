import {Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import {useNavigate} from "react-router";
import validator from "validator";
import {useDispatch} from "react-redux";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/auth-action-creators";

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        if(!email){
            setError({error, password: 'Field required'});
            return;
        }else {
            setError({error, password: null});
        }

        if(!validator.isEmail(email)){
            setError({error, email: 'Invalid email'});
            return;
        }else {
            setError({error, email: null});
        }

        dispatch(AUTH_ACTION_CREATORS.forgotPassword({email}));
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: ' center',
                backgroundColor: 'background.default'
            }}>
            <Container>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={1} variant="elevation">
                            <CardContent>
                                <Button
                                    onClick={() => navigate(-1)}
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        color: 'white'
                                    }}
                                    color="secondary"
                                    mb={4}
                                    startIcon={<ChevronLeft sx={{color: 'white'}} fontSize="medium"/>} variant="text">
                                    Back
                                </Button>

                                <Typography
                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}
                                    gutterBottom={true}
                                    align="center"
                                    variant="h4">
                                    Birth Registry
                                </Typography>
                                <Typography mb={1} gutterBottom={true} align="center" variant="body1">
                                    Forgot Password
                                </Typography>
                                <Typography
                                    gutterBottom={true} align="center" variant="body2">
                                    Enter your email to get a password link
                                </Typography>

                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="Email"
                                        fullWidth={true}
                                        name="email"
                                        required={true}
                                        variant="outlined"
                                        value={email}
                                        error={Boolean(error)}
                                        helperText={error}
                                        type="email"
                                        size="medium"
                                        defaultValue=""
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </Stack>

                                <Button
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Get Reset Link
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default ForgotPasswordPage;
