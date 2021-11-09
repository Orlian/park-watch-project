import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Container,
    createTheme,
    FormControlLabel,
    FormGroup,
    Grid, Modal,
    responsiveFontSizes,
    Switch, ThemeProvider,
    Typography
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SvgParkMap from "../components/SvgParkMap/SvgParkMap";
import Clock from 'react-digital-clock';


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

    }

    const [parkingState, setParkingState] = useState(defaultState)
    const [open, setOpen] = useState(false)
    const [showShit, setShowShit] = useState(false)

    useEffect(()=>{
        // Initial load show prompt about rules for parking lot
        // Save into clients local storage if they have accessed the site before

        if(localStorage.getItem('visitedBefore')) {
            return true
        }else{localStorage.setItem('visitedBefore', true)
            handleOpen()
            return true
        }
    },[])


    // useEffect(() => {
    //     setParkingState({...parkingState,
    //         ID1: true,
    //         ID2: true,
    //         ID3: true,
    //         ID4: true,
    //         ID5: true,
    //         ID6: true,
    //         ID7: true,
    //         ID8: true,
    //         ID9: true,
    //         ID10:true,
    //         ID11:true,
    //         ID12:true,
    //         ID13:true,
    //         // ID14: true, principals parking spot: always reserved
    //         ID15:true,
    //         ID16:true,
    //         ID17:true,
    //         ID18:true,
    //         ID19:false,
    //         ID20:true,
    //         ID21:true,
    //         ID22:true,
    //         ID23:true,
    //         ID24:true,
    //         ID25:true,
    //         ID26:false
    //         ,
    //     })
    //
    // },[])

    const switchSpotStatus = (id) => {
        setParkingState({...parkingState, ID1: !parkingState.ID1})
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

  return (
      <ThemeProvider theme={theme}>
          <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style} >

                  <Grid container >
                      <Grid item style={{paddingBottom: '1rem'}}>
                          <Switch label='language'/>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                              Metropolia Karamalmi Parkinglot
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              This parkinglot is for teachers only!!!! ParkkiPate Oy is monitoring and ticketing cars that have no authorization document on windshield.
                              Parkkipaikka on vain koulun opettajille!!!! ParkkiPate Oy valvoo parkkipaikkaa ja sakottaa autoja joilla ei ole lupalappua.
                          </Typography>
                      </Grid>
                  <Grid item>
                      <Button variant="outlined" startIcon={<CheckIcon />} onClick={handleClose}>
                          OK
                      </Button>
                  </Grid>
                  </Grid>

              </Box>
          </Modal>
          <Container disableGutters={true}>
              <Typography variant='h1' >Karamalmi</Typography>
              <Typography variant='h4' >Parkkipaikkatilanne</Typography>

              <Typography variant='h4' >{<Clock hour12= {false} />}</Typography>

              {showShit &&
              <FormGroup row={true}>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID1: !parkingState.ID1})
                  }}/>} label="1"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID2: !parkingState.ID2})
                  }}/>} label="2"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID3: !parkingState.ID3})
                  }}/>} label="3"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID4: !parkingState.ID4})
                  }}/>} label="4"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID5: !parkingState.ID5})
                  }}/>} label="5"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID6: !parkingState.ID6})
                  }}/>} label="6"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID7: !parkingState.ID7})
                  }}/>} label="7"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID8: !parkingState.ID8})
                  }}/>} label="8"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID9: !parkingState.ID9})
                  }}/>} label="9"/>

                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID10: !parkingState.ID10})
                  }}/>} label="10"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID11: !parkingState.ID11})
                  }}/>} label="11"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID12: !parkingState.ID12})
                  }}/>} label="12"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID13: !parkingState.ID13})
                  }}/>} label="13"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID15: !parkingState.ID15})
                  }}/>} label="15"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID16: !parkingState.ID16})
                  }}/>} label="16"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID17: !parkingState.ID17})
                  }}/>} label="17"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID18: !parkingState.ID18})
                  }}/>} label="18"/>
                  <FormControlLabel control={<Switch onChange={() => {
                      setParkingState({...parkingState, ID19: !parkingState.ID19})
                  }}/>} label="19"/>


              </FormGroup>
              }
              <SvgParkMap object={parkingState}/>

          </Container>
      </ThemeProvider>
  )
}

export default LandingPage;
