import Layout from "../../components/layout/layout";
import {
    Box,
    Container, Divider,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import {Edit, Visibility} from "@mui/icons-material";
import moment from "moment";
import {useEffect, useState} from "react";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {Link} from "react-router-dom";
import UpdateRequestDialog from "../../components/dialogs/update/update-request-dialog";
import {orange} from "@mui/material/colors";

const RequestsPage = () => {

    const [selectedRequest, setSelectedRequest] = useState(null);

    const dispatch = useDispatch();

    const {authToken} = useSelector(selectAuth);

    useEffect(() => {
        dispatch(REQUEST_ACTION_CREATORS.getRequests(authToken));
    }, [authToken, dispatch]);

    const {requests, requestLoading, requestError} = useSelector(selectRequest);

    return (
        <Layout>
            {requestLoading && <LinearProgress variant="query" color="secondary"/>}
            <Container sx={{my: 4}}>
                {requestError && (
                    <Alert severity="error" sx={{py: 4}}>
                        <AlertTitle>
                            {requestError}
                        </AlertTitle>
                    </Alert>
                )}

                <Typography variant="h4">Requests({requests.length})</Typography>

                <Divider sx={{my: 3}} light={true} variant="fullWidth"/>

                {requests && requests.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper} elevation={0}>
                            <Table aria-label="payments table" size="medium">
                                <TableHead>
                                    <TableRow hover={true}>
                                        <TableCell>#</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Contact</TableCell>
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
                    <TableContainer component={Paper} elevation={0}>
                        <Table aria-label="payments table" size="medium">
                            <TableHead>
                                <TableRow hover={true}>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Contact</TableCell>
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
                                            <TableCell>{request.contact_phone}</TableCell>
                                            <TableCell>{moment(request.created_at).fromNow()}</TableCell>
                                            <TableCell>{request.status}</TableCell>
                                            <TableCell>
                                                <Grid container={true} alignItems="center" spacing={1}>
                                                    <Grid item={true}>
                                                        <Link style={{textDecoration: 'none'}}
                                                              to={`/requests/${request._id}`}>
                                                            <Tooltip title="View request detail">
                                                                <Visibility
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        backgroundColor: orange[50],
                                                                        borderRadius: 1,
                                                                        padding: 0.4,
                                                                        color: orange[800],
                                                                        fontSize: 32
                                                                    }}
                                                                    color="secondary"
                                                                    fontSize="small"
                                                                />
                                                            </Tooltip>
                                                        </Link>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Tooltip title="Update request">
                                                            <Edit color="secondary"
                                                                  sx={{
                                                                      cursor: 'pointer',
                                                                      backgroundColor: orange[50],
                                                                      borderRadius: 1,
                                                                      padding: 0.4,
                                                                      color: orange[800],
                                                                      fontSize: 32
                                                                  }}
                                                                  onClick={() => setSelectedRequest(request)}
                                                                  fontSize="small"/>
                                                        </Tooltip>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                {Boolean(selectedRequest) && (
                    <UpdateRequestDialog
                        request={selectedRequest}
                        open={Boolean(selectedRequest)}
                        handleClose={() => setSelectedRequest(null)}
                    />
                )}
            </Container>
        </Layout>
    )
}

export default RequestsPage;
