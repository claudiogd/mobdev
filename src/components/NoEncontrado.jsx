import React from 'react';
import {makeStyles, Paper, Typography, Button} from '@material-ui/core';
import {Home} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    icon: {
      width: 192,
      height: 192,
      color: theme.palette.secondary.main,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: `100%`,
    },
    paper: {
      backgroundColor: theme.palette.background.default,
      margin: 0,
      height: `calc(110vh - 64px)`,
    },
    button: {
      marginTop: 20,
    },
}));

const NoEncontrado = () => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.container}>
                    <Typography variant="h4">
                        404
                    </Typography>
                    <Typography variant="subtitle1">
                        Página no encontrada
                    </Typography>
                    <Button
                        color="secondary"
                        aria-label="Volver al sitio"
                        href="/"
                        className={classes.button}
                        title="Volver al sitio"
                    >
                        <Home />
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default NoEncontrado;