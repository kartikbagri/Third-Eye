import Input from "./Input";
import {Fragment, useState, useEffect, useRef, useCallback } from 'react';
import styles from "./AddMissingCarForm.module.css";
import Button from "./Button";
import axios from 'axios';
import Webcam from "react-webcam";
import { Buffer } from 'buffer';
import { Grid } from "react-loader-spinner";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
};

var interval;

const AddMissingCarForm = (props) => {

    const [file, setFile] = useState(null);
    const [licensePlate, setLicensePlate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [openCam, setOpenCam] = useState(false);
    const licenseRef = useRef(null);
    
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const data = imageSrc.toString().replace(/^data:image\/png;base64,/, "");
        const buf = Buffer.from(data, 'base64');
        const blob = new Blob([buf.buffer], {type: 'image/png'}); 
        const formData = new FormData();
        formData.append("photograph", blob);
        formData.append('latitude', 23)
        formData.append('longitude', 43)
        axios.post("https://third-eye-hackmanthan.herokuapp.com/api/cars", formData)
        .then(res => res.data)
        .then(data => {
            const licensePlate = data.licensePlateNumber;
            if(licensePlate.length>0) {
                console.log(licensePlate);
                setLicensePlate(licensePlate);
            } else {
                setLicensePlate(null);
            }
        })
        .catch(err => {
            console.log(err)
        })
    },[webcamRef]);

    useEffect(() => {
        if(!openCam) {
            clearInterval(interval);
            return;
        }
        interval = setInterval(() => {
            capture();
        }, 2000);
        
    }, [openCam, capture])
    

    const handleFileChange = (event) => {
        setFile(event.target.files);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        for(var x = 0; x<file.length; x++) {
            data.append('photograph', file[x])
            data.append('latitude', 23)
            data.append('longitude', 43)
        }
        setIsLoading(true);
        axios.post("https://third-eye-hackmanthan.herokuapp.com/api/cars", data)
        .then(res => res.data
        ).then(data => {
            setLicensePlate(data.licensePlateNumber);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const submitIt = () => {
        props.submitHandler(licenseRef.current.value.toLowerCase());
    }

    return  (
        <Fragment>
            <form onSubmit={submitIt} className={styles['form']}>
                <p className={styles['note']}>For viewing our maps feature, please use the following license plate <span className={styles['number']}>ka02mp9657</span></p>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>License Plate Number</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="License Plate Number"
                        ref={licenseRef}
                    />
                </div>
                <Button
                    className={styles['btn']}
                    type="submit"

                >
                    Submit
                </Button>
                <div className={styles['testing']}>
                    <label className={styles['form-label']}>Upload An Image (For testing purposes only)</label>
                    <input 
                        className={styles['form-input']}
                        type="file" id="file" 
                        accept=".jpg"
                        onChange={handleFileChange}
                    />
                </div>
                {!isLoading && <button 
                    className={styles['btn']}
                    onClick={handleSubmit}
                    >Upload</button>}
            </form>
            {isLoading && <div className='loading'><Grid color='white' ariaLabel="loading-indicator" /></div>}
            {!isLoading && licensePlate && <div className={styles['license-plate']}>License Plate Number: <span className={styles['number']}>{String(licensePlate).toUpperCase()}</ span></div>}
            <p className={styles['note']}>To test Camera Feature, which will be used in CCTVs</p>
            <Button
                className={styles['btn']}
                type="submit"
                onClick={() => setOpenCam((prevState) => {
                    return !prevState;
                })}
            >
                Camera
            </Button>
    
            {openCam && <Webcam
                audio={false}
                height={520}
                ref={webcamRef}
                screenshotFormat="image/png"
                width={1080}
                videoConstraints={videoConstraints}
            />}
            <p className={styles['note']}>If you wish to see our alert system for license plate detection, we will get an SMS on our own number due to the constraints of non-paid account of Twilio. If you wish to get a screenshot of the SMS that we have received in real time, here is the contact number to reach out: +91-9811297472</p>
        </Fragment>
    )
}

export default AddMissingCarForm;