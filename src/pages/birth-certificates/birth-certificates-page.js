import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const BirthCertificatesPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h4" align="center">Permissions Page</Typography>
            </Container>
        </Layout>
    )
}

export default BirthCertificatesPage;
