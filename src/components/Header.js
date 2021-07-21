import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Herolo Weather Task
                    </Typography>
                    <Link to="/"> <Button color="primary"><HomeIcon /></Button></Link>
                    <Link to="/favorites"> <Button color="inherit"><FavoriteIcon /></Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}