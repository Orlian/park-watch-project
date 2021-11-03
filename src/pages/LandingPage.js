import React, {useEffect, useState} from 'react';
import {Container, Typography} from '@mui/material';
import SvgParkMap from "../components/SvgParkMap/SvgParkMap";

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
        // ID14: true, pricipals parking spot: always reserved
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

  return (
      <Container disableGutters={true}>
          <Typography variant='h1'>I am a typography variant h1 element, hi</Typography>
          <SvgParkMap
          object={parkingState}
          />

      </Container>
  )
}

export default LandingPage;
