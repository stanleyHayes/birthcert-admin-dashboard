import {
    Alert, AlertTitle,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    LinearProgress, MenuItem, Select,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {PAYMENT_ACTION_CREATORS} from "../../../redux/payments/payment-action-creators";
import {selectPayment} from "../../../redux/payments/payment-reducer";

const UpdatePaymentDialog = ({open, handleClose, payment}) => {
    const [updatePayment, setUpdatePayment] = useState({...payment});
    const [error, setError] = useState({});

    const {status} = updatePayment;

    const handleChange = (event) => {
        setUpdatePayment({...updatePayment, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    const handleAddClick = () => {
        if (!status) {
            setError({error, status: 'Field Required'});
            return;
        } else {
            setError({error, status: null});
        }
        dispatch(PAYMENT_ACTION_CREATORS.updatePayment(token, payment._id, {status}));
    }

    const {paymentError, paymentLoading} = useSelector(selectPayment);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {paymentLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {paymentError && <Alert severity="error"><AlertTitle>{paymentError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    mb={2}
                    gutterBottom={true}>
                    Update Payment
                </Typography>
                <form>
                    <Stack direction="column" spacing={2}>
                        <Select
                            onChange={handleChange}
                            label="Status"
                            variant="outlined"
                            size="medium"
                            name="status"
                            fullWidth={true}
                            value={status}>
                            <MenuItem value="">Select Status</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Confirmed">Confirmed</MenuItem>
                            <MenuItem value="Waived">Waived</MenuItem>
                        </Select>
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions>
                <Grid container={true} spacing={1} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                color: 'secondary.main',
                                borderWidth: 2,
                                borderColor: 'secondary.main',
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light',
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            fullWidth={true}
                            onClick={handleClose}
                            size="large"
                            variant="outlined">Close</Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            onSubmit={handleAddClick}
                            fullWidth={true}
                            onClick={handleAddClick}
                            size="large"
                            sx={{
                                textTransform: 'capitalize',
                                color: 'black',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light',
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            variant="outlined">Update</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default UpdatePaymentDialog;
