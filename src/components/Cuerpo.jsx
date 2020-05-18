import React from 'react'
import { Box,Grid } from '@material-ui/core'
import Fichas from './Fichas'
import Imagenes from './Imagenes'
import Cargando from './Cargando'

const Cuerpo = (props) => {
    return (
        <div>
            {props.loadingBreeds ? 
                <Cargando />
            :
                <Grid container>

                    <Grid item xs={12}>
                        <Box>
                            <Fichas handleSelected={props.handleSelected} selected={props.selected} list={props.list} loading={props.loadingBreeds} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} mt={5}>
                        <Imagenes selected={props.selected} breeds={props.breeds} loadingBreeds={props.loadingBreeds} />
                    </Grid>

                </Grid>
            }
        </div>
    )
}

export default Cuerpo;
