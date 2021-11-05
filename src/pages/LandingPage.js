import React, {useEffect, useState} from 'react';
import {
    Container,
    createTheme,
    FormControlLabel,
    FormGroup,
    Grid,
    responsiveFontSizes,
    Switch, ThemeProvider,
    Typography
} from '@mui/material';
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


    useEffect(() => {
        setParkingState({...parkingState,
            ID5: true,
            ID7: true,
            ID22: true,
            ID26: true
        })

    },[])

    const switchSpotStatus = (id) => {
        setParkingState({...parkingState, ID1: !parkingState.ID1})
    }


  return (
      <ThemeProvider theme={theme}>
          <Container disableGutters={true}>
              <Typography variant='h1' >Karamalmi</Typography>
              <Typography variant='h4' >Parkkipaikkatilanne</Typography>

              <Typography variant='h4' >{<Clock hour12= {false} />}</Typography>


              {/*<FormGroup row={true}>*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID1: !parkingState.ID1})*/}
              {/*    }} />} label="1" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID2: !parkingState.ID2})*/}
              {/*    }} />} label="2" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID3: !parkingState.ID3})*/}
              {/*    }} />} label="3" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID4: !parkingState.ID4})*/}
              {/*    }} />} label="4" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID5: !parkingState.ID5})*/}
              {/*    }} />} label="5" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID6: !parkingState.ID6})*/}
              {/*    }} />} label="6" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID7: !parkingState.ID7})*/}
              {/*    }} />} label="7" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID8: !parkingState.ID8})*/}
              {/*    }} />} label="8" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID9: !parkingState.ID9})*/}
              {/*    }} />} label="9" />*/}

              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID10: !parkingState.ID10})*/}
              {/*    }} />} label="10" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID11: !parkingState.ID11})*/}
              {/*    }} />} label="11" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID12: !parkingState.ID12})*/}
              {/*    }} />} label="12" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID13: !parkingState.ID13})*/}
              {/*    }} />} label="13" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID15: !parkingState.ID15})*/}
              {/*    }} />} label="15" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID16: !parkingState.ID16})*/}
              {/*    }} />} label="16" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID17: !parkingState.ID17})*/}
              {/*    }} />} label="17" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID18: !parkingState.ID18})*/}
              {/*    }} />} label="18" />*/}
              {/*    <FormControlLabel control={<Switch onChange={()=> {*/}
              {/*        setParkingState({...parkingState, ID19: !parkingState.ID19})*/}
              {/*    }} />} label="19" />*/}



              {/*</FormGroup>*/}
              <SvgParkMap object={parkingState}/>

          </Container>
      </ThemeProvider>
  )
}

export default LandingPage;
