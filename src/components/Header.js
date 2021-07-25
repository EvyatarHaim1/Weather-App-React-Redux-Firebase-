import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import SettingOptions from './SettingOptions';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbar: {
        display: 'flex',
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        fontSize: '16px',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const convertUnit = useSelector((state) => state.setting.unit);
    const darkMode = useSelector((state) => state.setting.darkMode);

    return (
        <Div>
            <div className={classes.root}>
                <AppBar position="static" color={"default"}>
                    <Toolbar className={classes.toolbar}>
                        <Title>
                            <Typography variant="h6" className={classes.title}>
                                Weather App - Evyatar Haim
                            </Typography>
                        </Title>
                        <Feautures>
                            <SettingOptions />
                        </Feautures>
                        <Links>
                            <Link to="/"> <Button color="primary"><HomeIcon /></Button></Link>
                            <Link to="/favorites"> <Button color="primary"><FavoriteIcon /></Button></Link>
                        </Links>
                    </Toolbar>
                </AppBar>
            </div>
        </Div>
    );
}

const Div = styled.div`
justify-content: center;
align-items: center;

@media (max-width: 480px) {
    display: none;
  }
`
const Links = styled.div`
display: flex;
justify-content:flex-end;
flex:1;
`
const Feautures = styled.div`
display: flex;
justify-content:center;
flex:1.5;
`
const Title = styled.div`
@media (max-width:700px){
    display:none !important;
}
`
