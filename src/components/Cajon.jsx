import React, { Fragment } from 'react'
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core'

import Listas from './Listas'
import Cargando from './Cargando'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar
}))

const Cajon = (props) => {

    const classes = useStyles()

    return (
        <Fragment>
            {props.loadingBreeds ? 
                <Cargando />
            :
                <Drawer
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    anchor="left"
                    variant={props.variant}
                    open={props.open}
                    onClose={props.onClose ? props.onClose : null}
                >
                    <div className={classes.toolbar}></div>
                    <Divider />
                    <Listas breeds={props.breeds} loadingBreeds={props.loadingBreeds} handleSelected={props.handleSelected} listSelected={props.listSelected} />
                </Drawer>
            }
        </Fragment>
    )
}

export default Cajon;
