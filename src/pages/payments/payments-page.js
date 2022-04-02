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
import {selectPayment} from "../../redux/payments/payment-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import {Edit} from "@mui/icons-material";
import moment from "moment";
import {useEffect} from "react";
import {PAYMENT_ACTION_CREATORS} from "../../redux/payments/payment-action-creators";

const PaymentsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {paddingTop: 16}
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PAYMENT_ACTION_CREATORS.getPayments());
    }, [dispatch]);
    const {payments, paymentLoading, paymentError} = useSelector(selectPayment);

    return (
        <Layout>
            {paymentLoading && <LinearProgress variant="query" color="primary"/>}
            <Container className={classes.container}>
                {paymentError && (
                    <Alert severity="error" sx={{py: 4}}>
                        <AlertTitle>
                            Error
                        </AlertTitle>
                        <Typography align="center" variant="body2">{paymentError}</Typography>
                    </Alert>
                )}

                <Grid my={4} container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Payments</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h5">{payments.length}</Typography>
                    </Grid>
                </Grid>
                {payments && payments.length === 0 ? (
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
                        <Box py={8}>
                            <Typography align="center" variant="h6">No Payments available</Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer sx={{py: 4}} component={Paper} elevation={0}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow hover={true}>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {payments && payments.map((payment, index) => {
                                    return (
                                        <TableRow hover={true} key={payment._id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{payment.name}</TableCell>
                                            <TableCell>{payment.phone}</TableCell>
                                            <TableCell>{payment.amount} GHS</TableCell>
                                            <TableCell>{payment.transaction_id}</TableCell>
                                            <TableCell>{moment(payment.created_at).fromNow()}</TableCell>
                                            <TableCell>{payment.status}</TableCell>
                                            <TableCell>
                                                <Grid container={true} alignItems="center">
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

export default PaymentsPage;
