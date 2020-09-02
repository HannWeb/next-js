import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
// components
import Layout from '../../components/layout/Layout'

//MUI
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    large: {
        width: theme.spacing(32),
        height: theme.spacing(32),
    },
}));



const userProfile = ({ user }) => {
    const userSingle =
        <Card >
            <Box display='flex' justifyContent="center" borderRadius={16}>
                <img src={user.avatar} alt="" />
            </Box>
            <CardContent>
                <Typography variant="h2" component="h2" color="primary">
                    {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="h4" color="textSecondary" component="p">
                    Email: {user.email}
                </Typography>
            </CardContent>
        </Card>
    return (
        <Layout>
            <Box mt={5}>
                {userSingle}
            </Box>

        </Layout>
    )
}

userProfile.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const user = await res.json();
    return { user: user.data }

}


export default userProfile