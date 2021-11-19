import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    createTheme,
    Grid,
    Modal,
    responsiveFontSizes, Stack,
    ThemeProvider,
    Typography,
    Divider,
    Paper, Card,
} from '@mui/material';

import {makeStyles} from '@mui/styles';

import CheckIcon from '@mui/icons-material/Check';
import SvgParkMap from '../components/SvgParkMap/SvgParkMap';
import Clock from 'react-digital-clock';
import AccessibleIcon from '@mui/icons-material/Accessible';
import logo from './ParkkiPate-logo-retina-header.jpeg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '0.5rem',
        p: 4,
    },
    card: {
        borderRadius: '0 0 50px 50px !important',
        overflow: 'hidden',

    }

});

const LandingPage = () => {
    const classes = useStyles();
    const defaultState = {
        ID1: false,
        ID2: false,
        ID3: false,
        ID4: false,
        ID5: false,
        ID6: false,
        ID7: false,
        ID8: false,
        ID9: false,
        ID10: false,
        ID11: false,
        ID12: false,
        ID13: false,
        // ID14: true, principals parking spot: always reserved
        ID15: false,
        ID16: false,
        ID17: false,
        ID18: false,
        ID19: false,
        ID20: false,
        ID21: false,
        ID22: false,
        ID23: false,
        ID24: false,
        ID25: false,
        ID26: false,
        ID27: false,

    };


    const [parkingState, setParkingState] = useState(defaultState);
    const [open, setOpen] = useState(false);
    const [totalFreeSpaces, setTotalFreeSpaces] = useState(0);
    const [freeSpacesText, setFreeSpacesText] = useState({});
    const [freeInvaSpaces, setFreeInvaSpaces] = useState(0);
    const [invaSpacesText, setInvaSpacesText] = useState({});
    const [screenWidth, setScreenWidth] = useState('100%');

    useEffect(() => {
        const width = window.innerWidth;

        if (width > 600) {
            setScreenWidth('80%');
        }
    }, []);
    /*
   I
   I
   I
   I
   i
   I
   I
     */
    // set this variable true/false depending if you want to use fetch and real data.
    const loadData = true;
    const local = false;

    useEffect(() => {

        if (loadData) asyncFetch();

        if (localStorage.getItem('visitedBefore')) {
            return true;
        } else {
            localStorage.setItem('visitedBefore', true);
            handleOpen();
            return true;
        }
    }, []);

    // Check if inva spaces are occupied and show them separately
    useEffect(() => {
        const list = [parkingState.ID20, parkingState.ID27];
        const count = list.filter(item => !item).length;
        setFreeInvaSpaces(count);

        if (count === 2) {
            setInvaSpacesText({text: 'kaksi paikkaa vapaana', style: 'green'});
        } else if (count === 1) {
            setInvaSpacesText({text: 'yksi paikka vapaana', style: 'yellow'});
        } else {
            setInvaSpacesText({text: 'ei yhtään paikkaa vapaana', style: 'red'});
        }
    }, [parkingState.ID27, parkingState.ID20]);

    const asyncFetch = async () => {
        let data = {};

        if (local) {
            const response = await fetch(
                'http://192.168.12.111/api/ppd/get_places_by_camera.php?id=1&output=json');
            data = await response.json();

        } else {
            const response = await fetch('/data/jsondata.json');
            const responseData = await response.json();
            data = responseData.response;
            const totalResponse = await fetch('/data/jsonDataTotal.json');
            const totalResponseData = await totalResponse.json();
            const count = totalResponseData.response.free - freeInvaSpaces;
            setTotalFreeSpaces(totalResponseData.response.free);

            if (count >= 5) {
                setFreeSpacesText({text: 'useita paikkoja vapaana', style: 'green'});
            } else if (count < 5 && count >= 3) {
                setFreeSpacesText({text: 'muutamia paikkoja vapaana', style: '#ebbc12'});
            } else if (count === 2) {
                setFreeSpacesText({text: 'kaksi paikkaa vapaana', style: '#ebbc12'});
            } else if (count === 1) {
                setFreeSpacesText({text: 'yksi paikka vapaana', style: '#ebbc12'});
            } else {
                setFreeSpacesText({text: 'ei yhtään paikkaa vapaana', style: 'red'});
            }
        }

        const obj = Object.values(data?.body);

        const newObj = {};

        obj.map(x => {
                newObj[`ID${x.id}`] = parseInt(x.status) ? true : false;
            },
        );

        setParkingState(newObj);

        console.log('Fetched data', new Date());

    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (loadData) {

            const timerInterval = setInterval(async () => {
                asyncFetch();
            }, 5000);

            return () => clearInterval(timerInterval);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>

                    <Grid container direction={'column'} textAlign={'center'}>
                        <Grid item>
                            <img src={'/alarm.png'} alt={'Picture of a alarm'}
                                 width={'50%'}/>
                        </Grid>
                        <Grid item style={{paddingBottom: '1rem'}}>
                            {/*<Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={'bold'}>
                  Metropolia Karamalmi Parkinglot
                </Typography>
                */}
                            <Typography id="modal-modal-description" sx={{mt: 2}}
                                        fontWeight={'bold'}>

                                Parkkipaikka on vain koulun opettajille!!!! ParkkiPate Oy
                                valvoo parkkipaikkaa ja
                                sakottaa autoja joilla ei ole lupalappua.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={logo} alt={'Parkkipate logo'} width={'50%'}/>
                        </Grid>
                        <Grid item marginTop={'1rem'}>
                            <Button variant="contained" fullWidth={true}
                                    onClick={handleClose}>
                                Jatka
                            </Button>
                        </Grid>

                    </Grid>

                </Box>
            </Modal>
            <Card elevation={5} className={classes.card}>
                <SvgParkMap object={parkingState}/>
            </Card>
            <Grid container margin={'1rem 0 2rem 0'}>
                <Grid item xs={12} margin={'1rem 0 0 0'}>
                    <Stack direction={'row'} justifyContent={'space-between'}
                           alignItems={'self-end'} margin={'0 1rem'}>
                        <Typography variant="h7">Vapaat paikat ({totalFreeSpaces})</Typography>
                        <Box display={'flex'} alignItems={'self-end'}>
                            <AccessTimeIcon/>
                            <Typography variant={'h7'}>{<Clock
                                hour12={false}/>}</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} margin={'1rem 0 0 0'}>
                    <Stack direction={'row'} justifyContent={'space-between'}
                           textAlign={'left'} margin={'0 1rem 1rem 1rem'}>
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            <LocalParkingIcon sx={{
                                fontSize: '47.875px',
                                backgroundColor: '#2962ff',
                                color: 'white',
                                marginRight: '0.5rem',
                            }}/>
                            <Box>
                                <Typography variant="h5"
                                            fontWeight={'bold'}>Parkkipaikat</Typography>
                                <Typography variant="h7"
                                            color={freeSpacesText.style}>{freeSpacesText.text}</Typography>
                            </Box>
                        </Stack>
                        <Box display={'flex'} alignItems={'flex-end'}>
                            <Typography variant="h2"
                                        color={freeSpacesText.style}>{totalFreeSpaces -
                            freeInvaSpaces}</Typography>
                        </Box>
                    </Stack>
                    <Divider/>
                </Grid>
                <Grid item xs={12} margin={'1rem 0'}>
                    <Stack direction={'row'} justifyContent={'space-between'}
                           textAlign={'left'} margin={'0 1rem 1rem 1rem'}>
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            <AccessibleIcon sx={{
                                fontSize: '47.875px',
                                backgroundColor: '#2962ff',
                                color: 'white',
                                marginRight: '0.5rem',
                            }}/>
                            <Box>
                                <Typography variant="h5"
                                            fontWeight={'bold'}>Invapaikat</Typography>
                                <Typography variant="h7"
                                            color={invaSpacesText.style}>{invaSpacesText.text}</Typography>
                            </Box>
                        </Stack>
                        <Box display={'flex'} alignItems={'flex-end'}>
                            <Typography variant="h2"
                                        color={invaSpacesText.style}>{freeInvaSpaces}</Typography>
                        </Box>
                    </Stack>
                    <Divider/>
                </Grid>

            </Grid>

        </ThemeProvider>
    );
};

export default LandingPage;
