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
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {selectPayment} from "../../redux/payments/payment-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import {Edit} from "@mui/icons-material";
import moment from "moment";
import {useEffect, useState} from "react";
import {PAYMENT_ACTION_CREATORS} from "../../redux/payments/payment-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import UpdatePaymentDialog from "../../components/dialogs/update/update-payment-dialog";
import {orange} from "@mui/material/colors";

const PaymentsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {paddingTop: 16}
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    const [selectedPayment, setSelectedPayment] = useState(null);


    useEffect(() => {
        dispatch(PAYMENT_ACTION_CREATORS.getPayments(token));
    }, [token, dispatch]);

    const {payments, paymentLoading, paymentError} = useSelector(selectPayment);

    return (
        <Layout>
            {paymentLoading && <LinearProgress variant="query" color="primary"/>}
            <Container className={classes.container}>
                {paymentError && (
                    <Alert severity="error" sx={{py: 4}}>
                        <AlertTitle>
                            {paymentError}
                        </AlertTitle>
                    </Alert>
                )}

                <Grid my={4} container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Payments({payments.length})</Typography>
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
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No payments available
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
                                                    <Grid item={true}>
                                                        <Tooltip title="Update Payment">
                                                            <Edit
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                    backgroundColor: orange[50],
                                                                    borderRadius: 1,
                                                                    padding: 0.4,
                                                                    color: orange[800]
                                                                }}
                                                                color="secondary"
                                                                onClick={() => setSelectedPayment(payment)}
                                                                fontSize="small"
                                                            />
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

                {Boolean(selectedPayment) && (
                    <UpdatePaymentDialog
                        payment={selectedPayment}
                        open={Boolean(selectedPayment)}
                        handleClose={() => setSelectedPayment(null)}
                    />
                )}
            </Container>
        </Layout>
    )
}

export default PaymentsPage;
