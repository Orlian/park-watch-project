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
    const [data, setData] = useState();

    useEffect(() => {
        // Initial load show prompt about rules for parking lot
        // Save into clients local storage if they have accessed the site before


        // const data = {
        //     "error": false,
        //     "response": {
        //         "header": {"camera_id": 2, "count": 7, "duration": "1636612381.60"},
        //         "body": {
        //             "1": {
        //                 "id": "1",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 12:41:40",
        //                 "x": "0.417188",
        //                 "y": "0.417188"
        //             },
        //             "2": {
        //                 "id": "2",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:00",
        //                 "x": "0.635938",
        //                 "y": "0.635938"
        //             },
        //             "3": {
        //                 "id": "3",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:00",
        //                 "x": "0.542188",
        //                 "y": "0.542188"
        //             },
        //             "4": {
        //                 "id": "4",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:00",
        //                 "x": "0.398438",
        //                 "y": "0.398438"
        //             },
        //             "5": {
        //                 "id": "5",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.426562",
        //                 "y": "0.426562"
        //             },
        //             "6": {
        //                 "id": "6",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.467187",
        //                 "y": "0.467187"
        //             },
        //             "7": {
        //                 "id": "7",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "8": {
        //                 "id": "8",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "9": {
        //                 "id": "9",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "10": {
        //                 "id": "10",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "11": {
        //                 "id": "11",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "12": {
        //                 "id": "12",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "13": {
        //                 "id": "13",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "14": {
        //                 "id": "14",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "15": {
        //                 "id": "15",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "16": {
        //                 "id": "16",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "17": {
        //                 "id": "17",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "18": {
        //                 "id": "18",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "19": {
        //                 "id": "19",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "20": {
        //                 "id": "20",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "21": {
        //                 "id": "21",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "22": {
        //                 "id": "22",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "23": {
        //                 "id": "23",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "24": {
        //                 "id": "24",
        //                 "status": "0",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "25": {
        //                 "id": "25",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //             "26": {
        //                 "id": "26",
        //                 "status": "1",
        //                 "changed_at": "2021-11-10 10:21:01",
        //                 "x": "0.5375",
        //                 "y": "0.5375"
        //             },
        //
        //         }
        //     }
        // }

        asyncFetch();



        if (localStorage.getItem('visitedBefore')) {
            return true
        } else {
            localStorage.setItem('visitedBefore', true)
            handleOpen()
            return true
        }
    }, [])

    const asyncFetch = async () => {


        const response =  await fetch('http://192.168.12.111/api/ppd/get_places_by_camera.php?id=1&output=json');

        const data = await response.json();
        const obj = Object?.values(data?.response?.body);
        const newObj = {}
        let count = 0;

        obj.map(x => {
                newObj[`ID${x.id}`] = parseInt(x.status) ? true : false;
                count++;
            }
        )

        if(count !== 25){
        setParkingState(newObj);
        }else return false;
        console.log('Fetched data', new Date())

    }


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

    useEffect(() => {
        const timerInterval = setInterval(async ()=>{
            asyncFetch();
            console.log('kissa')
        },500);

        return () => clearInterval(timerInterval)

    },[])



    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Grid container>
                        <Grid item style={{paddingBottom: '1rem'}}>
                            <Switch label='language'/>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Metropolia Karamalmi Parkinglot
                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                This parkinglot is for teachers only!!!! ParkkiPate Oy is monitoring and ticketing cars
                                that have no authorization document on windshield.
                                Parkkipaikka on vain koulun opettajille!!!! ParkkiPate Oy valvoo parkkipaikkaa ja
                                sakottaa autoja joilla ei ole lupalappua.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" startIcon={<CheckIcon/>} onClick={handleClose}>
                                OK
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
            <Container disableGutters={true}>
                <Typography variant='h1'>Karamalmi</Typography>
                <Typography variant='h4'>Parkkipaikkatilanne</Typography>

                <Typography variant='h4'>{<Clock hour12={false}/>}</Typography>

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
