import React,{
    Fragment,
    useState
} from 'react';
import {
    Checkbox,
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import {
    ExpandLess,
    ExpandMore
} from '@material-ui/icons';
import Cargando from './Cargando';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper,
        textTransform: "capitalize"
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    subNested: {
        paddingLeft: theme.spacing(8)
    }
}))
  
const Listas = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState([]);

    const handleChecked = (value) => () => {
        props.handleSelected(value);
    }

    const handleOpen = (value) => () => {
        const currentIndex = open.indexOf(value);
        const newOpen = [...open]

        if(currentIndex === -1) {
            newOpen.push(value);
        } else {
            newOpen.splice(currentIndex, 1);
        }

        setOpen(newOpen);
    }

    return (
        <Fragment>
            {props.loadingBreeds ? 
                <Cargando /> 
                :
                <List component="nav" className={classes.root}>

                    {props.breeds.map(breedList => {

                        return (
                            <Fragment key={breedList.letter}>

                                <ListItem dense button onClick={handleOpen(breedList.letter)}>

                                    <ListItemText primary={breedList.letter}></ListItemText>

                                    {open.indexOf(breedList.letter) !== -1 ? <ExpandLess /> : <ExpandMore />}

                                </ListItem>

                                <Collapse in={open.indexOf(breedList.letter) !== -1} timeout="auto">

                                    <List component="div" disablePadding>

                                        {breedList.breeds.map(breed => {

                                            const labelId = `checkbox-list-label-${breed.name}`;

                                            return (
                                                <Fragment key={breed.name}>

                                                    {breed.subBreeds.length > 0 ? 
                                                        
                                                        <Fragment>
                                                            <ListItem className={classes.nested} dense button onClick={handleChecked(breed.name)}>
                                                                <ListItemIcon>
                                                                    <Checkbox
                                                                        color="primary"
                                                                        edge="start"
                                                                        checked={breed.selected}
                                                                        tabIndex={-1}
                                                                        disableRipple
                                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                                    />
                                                                </ListItemIcon>
                                                                <ListItemText primary={breed.name}></ListItemText>
                                                                <ListItemSecondaryAction onClick={handleOpen(breed.name)}>
                                                                    <IconButton edge="end">
                                                                        {open.indexOf(breed.name) !== -1 ? <ExpandLess /> : <ExpandMore />}
                                                                    </IconButton>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                            <Collapse in={open.indexOf(breed.name) !== -1} timeout="auto">
                                                                <List component="div" disablePadding>

                                                                    {breed.subBreeds.map(subBreed => {
                                                                        const subId = `${breed.name}-${subBreed.name}`;
                                                                        const subLabelId = `checkbox-list-label-${subId}`;

                                                                        return(
                                                                            <ListItem key={subId} className={classes.subNested} dense button onClick={handleChecked(subId)}>
                                                                                <ListItemIcon>
                                                                                    <Checkbox
                                                                                        color="primary"
                                                                                        edge="start"
                                                                                        checked={subBreed.selected}
                                                                                        tabIndex={-1}
                                                                                        disableRipple
                                                                                        inputProps={{ 'aria-labelledby': subLabelId }}
                                                                                    />
                                                                                </ListItemIcon>
                                                                                <ListItemText primary={subBreed.name}></ListItemText>
                                                                            </ListItem>
                                                                        )

                                                                    })}
                                                                </List>

                                                            </Collapse>
                                                        </Fragment>

                                                        :

                                                        <ListItem className={classes.nested} dense button onClick={handleChecked(breed.name)}>
                                                            <ListItemIcon>
                                                                <Checkbox
                                                                    color="primary"
                                                                    edge="start"
                                                                    checked={breed.selected}
                                                                    tabIndex={-1}
                                                                    disableRipple
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                />
                                                            </ListItemIcon>
                                                            <ListItemText primary={breed.name}></ListItemText>
                                                        </ListItem>
                                                    }
                                                </Fragment>
                                            )
                                        })}

                                    </List>

                                </Collapse>
                            </Fragment>
                        )
                    })}
                </List>
            }
        </Fragment>
    )
}

export default Listas;