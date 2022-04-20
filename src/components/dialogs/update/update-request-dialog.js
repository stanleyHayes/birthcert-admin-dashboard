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
import {REQUEST_ACTION_CREATORS} from "../../../redux/requests/request-action-creators";
import {selectRequest} from "../../../redux/requests/request-reducer";

const UpdateRequestDialog = ({open, handleClose, request}) => {
    const [updateRequest, setUpdateRequest] = useState({...request});
    const [error, setError] = useState({});

    const {status} = updateRequest;

    const handleChange = (event) => {
        setUpdateRequest({...updateRequest, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const {authToken} = useSelector(selectAuth);

    const handleAddClick = () => {
        if (!status) {
            setError({error, status: 'Field Required'});
            return;
        } else {
            setError({error, status: null});
        }
        dispatch(REQUEST_ACTION_CREATORS.updateRequest(authToken, request._id, {status}));
    }

    const {requestError, requestLoading} = useSelector(selectRequest);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {requestLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {requestError && <Alert severity="error"><AlertTitle>{requestError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    mb={2}
                    gutterBottom={true}>
                    Update Request
                </Typography>
                <form>
                    <Stack direction="column" spacing={2}>
                        <Select
                            onChange={handleChange}
                            label="Pending"
                            variant="outlined"
                            size="medium"
                            name="status"
                            fullWidth={true}
                            value={status}>
                            <MenuItem value="">Select Status</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="confirmed">Confirmed</MenuItem>
                            <MenuItem value="waived">Waived</MenuItem>
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

export default UpdateRequestDialog;
