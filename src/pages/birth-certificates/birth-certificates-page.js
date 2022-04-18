import Layout from "../../components/layout/layout";
import {
    Box, Button,
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
import {Edit} from "@mui/icons-material";
import moment from "moment";
import {selectCertificate} from "../../redux/birth-certificates/birth-certificate-reducer";

const BirthCertificatesPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {paddingTop: 16}
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();


    const {certificates, certificateLoading, certificateError} = useSelector(selectCertificate);

    return (
        <Layout>
            {certificateLoading && <LinearProgress variant="query" color="primary"/>}
            <Container className={classes.container}>
                {certificateError && (
                    <Alert severity="error" sx={{py: 4}}>
                        <AlertTitle>
                            {certificateError}
                        </AlertTitle>
                    </Alert>
                )}

                <Grid
                    my={4}
                    container={true}
                    justifyContent="space-between"
                    alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Birth Certificates</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            color="secondary"
                            size="medium"
                            variant="outlined"
                            sx={{
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}>
                            Add Birth Certificate
                        </Button>
                    </Grid>
                </Grid>
                {certificates && certificates.length === 0 ? (
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
                                No certificates available
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
                                {certificates && certificates.map((certificate, index) => {
                                    return (
                                        <TableRow hover={true} key={certificate._id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{certificate.name}</TableCell>
                                            <TableCell>{certificate.phone}</TableCell>
                                            <TableCell>{certificate.amount} GHS</TableCell>
                                            <TableCell>{certificate.transaction_id}</TableCell>
                                            <TableCell>{moment(certificate.created_at).fromNow()}</TableCell>
                                            <TableCell>{certificate.status}</TableCell>
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

export default BirthCertificatesPage;
