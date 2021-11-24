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
  Card,
} from '@mui/material';

import SvgParkMap from '../components/SvgParkMap/SvgParkMap';
import Clock from 'react-digital-clock';
import AccessibleIcon from '@mui/icons-material/Accessible';
import logo from './ParkkiPate-logo-retina-header.jpeg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './LandingPage.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const LandingPage = () => {
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
  const [screenWidth, setScreenWidth] = useState(true);
  const [freeNormalSpaces, setFreeNormalSpaces] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 600) {
      setScreenWidth(false);
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
  // const loadData = true;

  useEffect(() => {
    asyncFetch();

    if (localStorage.getItem('visitedBefore')) {
      return true;
    }
    else {
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
    }
    else if (count === 1) {
      setInvaSpacesText({text: 'yksi paikka vapaana', style: '#e7d213'});
    }
    else {
      setInvaSpacesText({text: 'ei yhtään paikkaa vapaana', style: 'red'});
    }
  }, [parkingState.ID27, parkingState.ID20]);

  // checks free spaces from parkingState object
  useEffect(() => {
    let freeTotalCount = 0;
    for(const [, value] of Object.entries(parkingState)) {
      if(!value) freeTotalCount++;
    }
    const freeNormalCount = freeTotalCount - freeInvaSpaces;
    console.log({'freeTotalCount': freeTotalCount, 'freeNormalCount': freeNormalCount});
    console.log('parkingState entries', freeTotalCount);
    if (freeNormalCount >= 5) {
      setFreeSpacesText({text: 'useita paikkoja vapaana', style: 'green'});
    } else if (freeNormalCount >= 3) {
      setFreeSpacesText({text: 'muutamia paikkoja vapaana', style: '#e7d213'});
    } else if (freeNormalCount === 2) {
      setFreeSpacesText({text: 'kaksi paikkaa vapaana', style: '#e7d213'});
    } else if (freeNormalCount === 1) {
      setFreeSpacesText({text: 'yksi paikka vapaana', style: '#e7d213'});
    } else {
      setFreeSpacesText({text: 'ei yhtään paikkaa vapaana', style: 'red'});
    }
    setTotalFreeSpaces(freeTotalCount);
    setFreeNormalSpaces(freeNormalCount);

  },[freeInvaSpaces, parkingState]);

  useEffect(() => {

    const timerInterval = setInterval(() => {
      asyncFetch();
    }, 5000);

    return () => clearInterval(timerInterval);
  }, []);

  const asyncFetch = async () => {
    let data = {};

    try {
      const response = await fetch('/data/jsondata.json');
      const responseData = await response.json();
      data = responseData.response;
      const obj = Object.values(data?.body);
      const newObj = {};
      obj.map(x => {
            newObj[`ID${x.id}`] = !!parseInt(x.status);
          },
      );
      setParkingState(newObj);
    } catch (err) {
      // Tänne fetchaus virheet
      console.log('asyncFetch error', err.message);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Container disableGutters={screenWidth} maxWidth={'md'} style={{display:'flex', alignItems: 'center', width:'100vw', height: '100vh'}}>
        <ThemeProvider theme={theme}>
          <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <Box id={'modalBox'}>
              <Grid container direction={'row'} textAlign={'center'}>
                <Grid item xs={12} paddingTop={'1rem'}>
                  <img src={'/alarm.png'} width={'50%'} alt={'Picture of a alarm'}/>
                </Grid>
                <Grid item xs={12} style={{paddingBottom: '1rem'}}>
                  <Typography id="modal-modal-description"
                              sx={{mt: 2, padding: '1rem'}}
                              fontWeight={'bold'}>

                    Parkkipaikka on vain koulun opettajille!!!! ParkkiPate Oy
                    valvoo parkkipaikkaa ja
                    sakottaa autoja joilla ei ole lupalappua.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img src={logo} alt={'Parkkipate logo'} width={'50%'}/>
                </Grid>
                <Grid item marginTop={'1rem'} xs={12}>
                  <Button variant="contained" fullWidth={true}
                          onClick={handleClose}>
                    Jatka
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <Grid container>
            <Grid item sm={6}>
              <Card elevation={5} id={'svgParkMapCard'}>
                <SvgParkMap  object={parkingState}/>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Grid container id={'parkContentGridContainer'}>
                <Grid item xs={12} id={'parkContentGridItem'}>
                  <Stack direction={'row'} justifyContent={'space-between'}
                         alignItems={'self-end'} margin={'0 1rem'}>
                    <Typography variant="h7">Vapaat paikat
                      ({totalFreeSpaces})</Typography>
                    <Box display={'flex'} alignItems={'self-end'}
                         width={'6rem'} justifyContent={'end'}>
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
                                    fontWeight={'bold'} id='invaSpacesTitle'>Parkkipaikat</Typography>
                        <Typography variant="h7" id='freeSpacesText'
                        >{freeSpacesText?.text}</Typography>
                      </Box>
                    </Stack>

                    <Box display={'flex'} alignItems={'flex-end'} >
                      <Typography variant="h2"
                                  color={freeSpacesText?.style} id='freeSpacesNumber'>{freeNormalSpaces}</Typography>
                    </Box>
                  </Stack>
                  <Divider variant={screenWidth ? 'fullWidth' : 'middle'}/>
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
                                    fontWeight={'bold'} id='invaSpacesTitle'>Invapaikat</Typography>
                        <Typography variant="h7" id='invaSpacesText'
                        >{invaSpacesText?.text}</Typography>
                      </Box>
                    </Stack>
                    <Box display={'flex'} alignItems={'flex-end'} >
                      <Typography variant="h2"
                                  color={invaSpacesText?.style} id='invaSpacesNumber'>{freeInvaSpaces}</Typography>
                    </Box>
                  </Stack>
                  <Divider variant={screenWidth ? 'fullWidth' : 'middle'}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
  )
      ;
};

export default LandingPage;
