import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Typography,
    Alert,
    AlertTitle
} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";
import Layout from "../../components/layout/layout";

const RequestDetailPage = () => {

    const dispatch = useDispatch();

    const {requestDetail, requestError, requestLoading} = useSelector(selectRequest);
    const {authToken} = useSelector(selectAuth);

    const navigate = useNavigate();
    const {requestID} = useParams();

    useEffect(() => {
        dispatch(REQUEST_ACTION_CREATORS.getRequest(authToken, requestID));
    }, [authToken, dispatch, requestID]);

    return (
        <Layout>
            {requestLoading && <LinearProgress variant="query" color="primary"/>}
            <Container>

                {
                    requestError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>{requestError}</AlertTitle>
                        </Alert>
                    )
                }

                <Typography variant="h4">Request Detail</Typography>

                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{color: 'white'}}
                            onClick={() => navigate(-1)}
                            variant="contained"
                            startIcon={<ChevronLeft sx={{color: 'white'}}/>}
                            fullWidth={true}
                            disableElevation={true}
                            size="medium"
                            color="secondary">
                            Back
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>

                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Personal Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            First Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.first_name}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Middle Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && (requestDetail.middle_name ? requestDetail.middle_name : 'No middle name')}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Last Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.last_name}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Date of Birth
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && new Date(requestDetail.date_of_birth).toDateString()}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Other Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Sex
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.sex}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Place of Birth
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.place_of_birth}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            ID Card Type
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.id_card_type}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            ID Card Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.id_card_number}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Mother's Information
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Maiden Name
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.mother_maiden_name}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Age
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.age_of_mother}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Level of Education
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.mother_level_of_education}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Occupation
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.mother_occupation}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Nationality
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.mother_nationality}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Father's Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.name_of_father}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Age
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.age_of_father}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Level of Education
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.father_level_of_education}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Occupation
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.father_occupation}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Nationality
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.father_nationality}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Contact
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Telephone Number
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.telephone_number}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        House Number
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.house_number}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Religion
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.religion}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Full name of informant
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.full_name_of_informant}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {requestDetail && requestDetail.variant === 'baptism' ? (
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={1} variant="elevation">
                                {requestLoading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    <Box>
                                        <Typography
                                            gutterBottom={true}
                                            variant="h5">
                                            Identity (Baptism)
                                        </Typography>

                                        <Divider sx={{my: 2}} light={true} variant="fullWidth"/>
                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Baptiser
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {requestDetail && requestDetail.baptiser}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Place of Baptism
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {requestDetail && requestDetail.place_of_baptism}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Date of Baptism
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {requestDetail && new Date(requestDetail.date_of_baptism).toDateString()}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                District
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {requestDetail && requestDetail.district}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Phone
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {requestDetail && requestDetail.phone}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                    ) : (
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={1} variant="elevation">
                                {requestLoading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Identity (Weighing)
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Serial Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.serial_number}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Registration Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.registration_number}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            NHIS Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.nhis_number}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Sickle Cell Status
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.sickle_cell_status}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Birth Weight
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.birth_weight} KG
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Birth Length
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.birth_length} CM
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Head Circumference
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.head_circumference}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            G6PD Status
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.g6pd_status}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Gestation Age
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {requestDetail && requestDetail.gestation_age}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {requestLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>

                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Contact
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Name
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.contact_name}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Email
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.contact_email}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Phone
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {requestDetail && requestDetail.contact_phone}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default RequestDetailPage;
