import Router from 'next/router'

//MUI
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const Users = props => {
    let { users } = props
    const classes = useStyles();

    const onClickCard = (id) => {
        Router.push({ pathname: `/users/${id}` })
    }



    let user = users.map((users) =>
        <Box mt={2}>
            <Card >
                <CardActionArea onClick={() => onClickCard(users.id)}>
                    <CardContent>
                        <Box display="flex" alignItems="center" >
                            <div className={classes.root} key={users.id}>
                                <Typography variant="h6" color="primary"> {users.first_name} {users.last_name} </Typography>
                                <Typography> Email: {users.email}  </Typography>
                            </div>
                            <Avatar alt={users.first_name + users.last_name} src={users.avatar} className={classes.large} />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
    return (
        <Box mt={2}>
            {user}
        </Box>

    )
}

export default Users
