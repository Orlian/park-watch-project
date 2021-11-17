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
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SvgParkMap from '../components/SvgParkMap/SvgParkMap';
import Clock from 'react-digital-clock';
import AccessibleIcon from '@mui/icons-material/Accessible';
import logo from './ParkkiPate-logo-retina-header.jpeg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [parkingState, setParkingState] = useState(defaultState);
  const [open, setOpen] = useState(false);
  const [totalFreeSpaces, setTotalFreeSpaces] = useState(0);
  const [freeInvaSpaces, setFreeInvaSpaces] = useState(0);
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
      setTotalFreeSpaces(totalResponseData.response.free);
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
          <Box sx={style}>

            <Grid container direction={'column'}>
              <Grid item style={{paddingBottom: '1rem'}}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Metropolia Karamalmi Parkinglot
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                  {/*This parkinglot is for teachers only!!!! ParkkiPate Oy is monitoring and ticketing cars*/}
                  {/*that have no authorization document on windshield.*/}
                  Parkkipaikka on vain koulun opettajille!!!! ParkkiPate Oy
                  valvoo parkkipaikkaa ja
                  sakottaa autoja joilla ei ole lupalappua.
                </Typography>
              </Grid>
              <Grid item>
                <img src={logo} width={'50%'}/>
              </Grid>
              <Grid item>
                <Button variant="outlined" startIcon={<CheckIcon/>}
                        onClick={handleClose}>
                  OK
                </Button>
              </Grid>

            </Grid>

          </Box>
        </Modal>
        <Stack direction={'row'} justifyContent={'center'} spacing={7} marginY={3}>
          <Box display={'flex'} alignItems={'center'}>
            <LocalParkingIcon style={{color: 'green', fontSize: '5rem'}}/>
            <Typography variant={'h3'}>{totalFreeSpaces}</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <AccessibleIcon style={{color: '#74BCFF', fontSize: '5rem'}}/>
            <Typography variant={'h3'}>{freeInvaSpaces}</Typography>
          </Box>
        </Stack>
          <Typography variant="h4" marginY={2}>{<Clock hour12={false}/>}</Typography>
        <Grid item>
          <SvgParkMap object={parkingState}/>

        </Grid>


      </ThemeProvider>
  );
};

export default LandingPage;
