import Input from "./Input";
import {Fragment, useState } from 'react';
import styles from "./AddMissingCarForm.module.css";
import Button from "./Button";
import axios from 'axios';
import Webcam from "react-webcam";

const AddMissingCarForm = (props) => {

    const [file, setFile] = useState(null);
    const [licensePlate, setLicensePlate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files);
        console.log(file)
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
        axios.post("http://127.0.0.1:5000/api/cars", data)
        .then(res => res.data
        ).then(data => {
            setLicensePlate(data.licensePlateNumber);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return  (
        <Fragment>
            <form enctype="multipart" onSubmit={props.submitHandler} className={styles['form']}>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>License Plate Number</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="License Plate Number"
                    />
                </div>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>Model</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="Model"
                    />
                </div>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>Color</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="Color"
                    />
                </div>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>Last Location</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="Location"
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
                        multiple
                        onChange={handleFileChange}
                    />
                </div>
                {!isLoading && licensePlate && <div className={styles['license-plate']}>License Plate Number: <span className={styles['number']}>{String(licensePlate).toUpperCase()}</ span></div>}
                {/* <Webcam /> */}
                {!isLoading && <button 
                    className={styles['btn']}
                    onClick={handleSubmit}
                >Upload</button>}
            </form>
            {isLoading && <p>Loading...</p>}
            <div className={styles['extender']}/>
        </Fragment>
    )
}

export default AddMissingCarForm;