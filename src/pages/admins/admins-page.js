import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const AdminsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h4" align="center">Admins Page</Typography>
            </Container>
        </Layout>
    )
}

export default AdminsPage;
