
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#15171c",
        position: "relative",
        top: "-100px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      height: "80px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      color: "white",
    },
    title: {
        flexGrow: 1,
        color: "white",
    },
  }));

export default function TopMenu() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/home">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Security App
            </Typography>
            <Button className={classes.menuButton} color="inherit" href="/">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}