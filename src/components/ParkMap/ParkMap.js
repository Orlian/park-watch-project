import React, {useState} from 'react';
import SvgParkMap from "../SvgParkMap/SvgParkMap";


const ParkMap = () => {
    const defaultState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        //14: true, principals parking spot: always reserved
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
        21: false,
        22: false,
        23: false,
        24: false,
        25: false,
        26: false,

    }

    const [parkingState, setParkingState] = useState(defaultState)

    const json = {
        "error": false,
        "response": {
            "header": {"camera_id": 2, "count": 7, "duration": "1636612381.60"},
            "body": {
                "1": {"id": "1", "status": "0", "changed_at": "2021-11-10 12:41:40", "x": "0.417188", "y": "0.417188"},
                "2": {"id": "2", "status": "1", "changed_at": "2021-11-10 10:21:00", "x": "0.635938", "y": "0.635938"},
                "3": {"id": "3", "status": "1", "changed_at": "2021-11-10 10:21:00", "x": "0.542188", "y": "0.542188"},
                "4": {"id": "4", "status": "0", "changed_at": "2021-11-10 10:21:00", "x": "0.398438", "y": "0.398438"},
                "5": {"id": "5", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.426562", "y": "0.426562"},
                "6": {"id": "6", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.467187", "y": "0.467187"},
                "7": {"id": "7", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "8": {"id": "8", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "9": {"id": "9", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "10": {"id": "10", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "11": {"id": "11", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "12": {"id": "12", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "13": {"id": "13", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "15": {"id": "15", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "16": {"id": "16", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "17": {"id": "17", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "18": {"id": "18", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "19": {"id": "19", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "20": {"id": "20", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "21": {"id": "21", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "22": {"id": "22", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "23": {"id": "23", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "24": {"id": "24", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "25": {"id": "25", "status": "1", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},
                "26": {"id": "26", "status": "0", "changed_at": "2021-11-10 10:21:01", "x": "0.5375", "y": "0.5375"},


            }
        }
    }

    const parseJson = (json) => {

    }


    return (
        <SvgParkMap object={parkingState}/>

    )
}
