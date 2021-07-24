import React from 'react';
import styled from 'styled-components';
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
    toolbar: {
        paddingLeft: '2%',
        paddingRight: '3%'
    },
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();


    return (
        <Div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            Herolo Weather Task - Evyatar Haim
                        </Typography>
                        <Link to="/"> <Button color="inherit"><HomeIcon /></Button></Link>
                        <Link to="/favorites"> <Button color="primary"><FavoriteIcon /></Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        </Div>
    );
}

const Div = styled.div`
@media (max-width: 480px) {
    display: none;
  }
`

