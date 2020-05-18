import React, {
    useEffect,
    useState,
    Fragment
} from 'react';
import {
    makeStyles, 
    Hidden
} from '@material-ui/core';

import Navbar from './Navbar';
import Cajon from './Cajon';
import Cuerpo from './Cuerpo';
import Cargando from './Cargando';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

const useFetchBreeds = () => {
    const[breeds, setBreeds] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBreeds() {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            const data = await response.json();

            const breeds = [];
            for(let m in data.message) {
                const breed = {
                    name: m,
                    images: [],
                    selected: false,
                    subBreeds: []
                };

                if(data.message[m].length > 0) {
                    for(let sb of data.message[m]){
                        breed.subBreeds.push({name: sb,images:[],selected:false});
                    }
                }

                const currentLetter = breeds.find(l => l.letter === breed.name.substring(0,1).toUpperCase());

                if(currentLetter === undefined) {
                    breeds.push({
                        'letter': breed.name.substring(0,1).toUpperCase(),
                        'breeds': [
                            breed
                        ]
                    });
                } else {
                    currentLetter.breeds.push(breed);
                }

            }
            setBreeds(breeds);
            setLoading(false);
        }
        fetchBreeds();
    }, [])

    return {breeds, loading, setBreeds};
}

const getPictures = async (name) => {
    const response = await fetch(`https://dog.ceo/api/breed/${name}/images`);
    const data = await response.json();
    const images = data.message;
    images.splice(3);

    return images;
}

const Contenedor = () => {

    const classes = useStyles();

    const [abrir, setAbrir] = useState(false);
    const {breeds, loadingBreeds, setBreeds} = useFetchBreeds();
    const [selected, setSelected] = useState([]);

    const accionAbrir = () => {
        setAbrir(!abrir);
    }

    const handleSelected = async (value) => {
        const newBreeds = [...breeds];
        const inValue = value.split('-');
        const letter = newBreeds.filter(l => l.letter === inValue[0].substring(0,1).toUpperCase());
        const breed = letter[0].breeds.filter(b => b.name === inValue[0]);

        if(inValue.length > 1) {
            const subBreed = breed[0].subBreeds.filter(sb => sb.name === inValue[1]);
            subBreed[0].selected = !subBreed[0].selected;

            const hasSelected = breed[0].subBreeds.filter(sb => sb.selected);
            if(breed[0].subBreeds.length === hasSelected.length) {
                breed[0].selected = true;
            } else {
                breed[0].selected = false;
            }

        } else {
            breed[0].selected = !breed[0].selected;

            for(let b of breed[0].subBreeds) {
                b.selected = breed[0].selected;
            }
        }

        const newSelecteds = [];
        for(const b of newBreeds) {
            for(const breed of b.breeds) {
                if(breed.subBreeds.length > 0) {
                    for(const sb of breed.subBreeds) {
                        if(sb.selected){
                            if(sb.images.length < 1) {
                                sb.images = await getPictures(`${breed.name}/${sb.name}`);
                            }
                            newSelecteds.push(`${breed.name}-${sb.name}`);
                        }
                    }
                } else if(breed.selected) {
                    if(breed.images.length < 1) {
                        breed.images = await getPictures(breed.name);
                    }
                    newSelecteds.push(breed.name);
                }
            }
        }
        setBreeds(newBreeds);
        setSelected(newSelecteds);
    }

    return (
        <Fragment>
            {loadingBreeds ? 
                <Cargando />
            :
                <div className={classes.root}>
                    <Navbar
                        accionAbrir={accionAbrir}
                    />      
                    <Hidden xsDown>
                        <Cajon
                            breeds={breeds}
                            loadingBreeds={loadingBreeds}
                            handleSelected={handleSelected}
                            listSelected={selected}
                            variant="permanent"
                            open={true}
                        />      
                    </Hidden>
                    <Hidden smUp>
                        <Cajon
                            breeds={breeds}
                            loadingBreeds={loadingBreeds}
                            handleSelected={handleSelected}
                            listSelected={selected}
                            variant="temporary"
                            open={abrir}
                            onClose={accionAbrir}
                        />      
                    </Hidden>
                    <div className={classes.content}>
                        <div className={classes.toolbar}></div>
                        <Cuerpo handleSelected={handleSelected} selected={selected.sort()} breeds={breeds} loadingBreeds={loadingBreeds} />
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Contenedor;
