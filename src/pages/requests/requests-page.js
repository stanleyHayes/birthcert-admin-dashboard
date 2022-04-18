import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import {Edit, Visibility} from "@mui/icons-material";
import moment from "moment";
import {useEffect} from "react";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const RequestsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {paddingTop: 16}
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(REQUEST_ACTION_CREATORS.getRequests());
    }, [dispatch]);
    const {requests, requestLoading, requestError} = useSelector(selectRequest);

    return (
        <Layout>
            {requestLoading && <LinearProgress variant="query" color="primary"/>}
            <Container className={classes.container}>
                {requestError && (
                    <Alert severity="error" sx={{py: 4}}>
                        <AlertTitle>
                            Error
                        </AlertTitle>
                        <Typography align="center" variant="body2">{requestError}</Typography>
                    </Alert>
                )}

                <Grid my={4} container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Requests</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h5">{requests.length}</Typography>
                    </Grid>
                </Grid>
                {requests && requests.length === 0 ? (
                    <Box sx={{py: 4}}>
                        <TableContainer component={Paper} elevation={0}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow hover={true}>
                                        <TableCell>#</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Invitation ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No requests available
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer sx={{py: 4}} component={Paper} elevation={0}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow hover={true}>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date of Birth</TableCell>
                                    <TableCell>Sex</TableCell>
                                    <TableCell>Place of Birth</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {requests && requests.map((request, index) => {
                                    return (
                                        <TableRow hover={true} key={request._id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{request.full_name_of_informant}</TableCell>
                                            <TableCell>{new Date(request.date_of_birth).toDateString()}</TableCell>
                                            <TableCell>{request.sex}</TableCell>
                                            <TableCell>{request.place_of_birth}</TableCell>
                                            <TableCell>{moment(request.created_at).fromNow()}</TableCell>
                                            <TableCell>{request.status}</TableCell>
                                            <TableCell>
                                                <Grid container={true} alignItems="center" spacing={1}>
                                                    <Grid item={true}><Visibility fontSize="small"/></Grid>
                                                    <Grid item={true}><Edit fontSize="small"/></Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </Layout>
    )
}

export default RequestsPage;
