import {Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

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
                                <Typography gutterBottom={true} align="center" variant="h4">e-BCert</Typography>
                                <Typography gutterBottom={true} align="center" variant="h6">Forgot Password</Typography>
                                <Typography gutterBottom={true} align="center" variant="body2">
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
                                    sx={{backgroundColor: 'primary.main', color: 'white'}}
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
