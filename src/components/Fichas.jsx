import React, {Fragment} from 'react';
import {
    Chip, Avatar, Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Cargando from './Cargando';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
        }
    },
    item: {
        textTransform: "capitalize"
    }
}));

const Fichas = (props) => {

    const classes = useStyles();

    const handleDelete = (id) => {
        props.handleSelected(id);
    }

    return (
        <Fragment>
            {props.loading ?
                <Cargando />
            :
                <div className={classes.root}>
                    {props.selected.length > 0 ?
                        <Typography variant="h6">
                            Filtros seleccionados: 
                        </Typography>
                    :
                        null
                    }
                    {props.selected.map(s =>  {
                        const firstLetter = s.substring(0,1).toUpperCase();
                        const label = s.replace("-"," ");

                        return (
                            <Chip 
                                key={s} 
                                avatar={<Avatar>{firstLetter}</Avatar>} 
                                className={classes.item} 
                                color="primary" 
                                label={label} 
                                onDelete={() => handleDelete(s)}
                                size="small" />
                        )
                    })}

                </div>
            }
        </Fragment>
    )
}

export default Fichas;
