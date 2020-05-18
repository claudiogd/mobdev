import React, { Fragment } from 'react';
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import Cargando from './Cargando';

const useStyles = makeStyles(theme => ({
    root: {
        maxWith: 345
    },
    media: {
        height: 350
    },
    typo: {
        textTransform: 'capitalize'
    }
}));

export const CardImage = (props) => {

    const classes = useStyles();

    return (
        <Fragment>
            {props.loadingBreeds ? 
                <Cargando />
            :
                <Grid item xs={4} sm={4} md={4} lg={4} mt={5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={props.name}
                                className={classes.media}
                                image={props.image}
                                title={props.name}
                            />
                            <CardContent>
                                <Typography className={classes.typo} gutterBottom variant="h5" component="h2">
                                    {props.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            }
        </Fragment>
    )
}

const Imagenes = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {props.breeds.map(letter => 
                letter.breeds.map(breed =>
                    breed.subBreeds.length > 0 ?
                        breed.subBreeds.map(subBreed =>
                            subBreed.selected ? 
                                subBreed.images.map((image,index) => <CardImage key={`${breed.name}-${subBreed.name}-${index}`} name={`${breed.name} ${subBreed.name}`} image={image} />) 
                            : null
                        )
                    :
                        breed.selected ? 
                            breed.images.map((image,index) => <CardImage key={`${breed.name}-${index}`} name={breed.name} image={image} />) 
                        : null
                )
            )}
        </Grid>
    )
}

export default Imagenes;