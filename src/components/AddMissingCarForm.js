import Input from "./Input";
import {useState } from 'react';
import styles from "./AddMissingCarForm.module.css";
import Button from "./Button";
import axios from 'axios';

const AddMissingCarForm = (props) => {

    const [file, setFile] = useState(null);

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
        axios.post("http://127.0.0.1:5000/api/cars", data)
        .then(res => { 
            console.log(res.statusText)
          })
    }

    return  (
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
                <label className={styles['form-label']}>Color</label>
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
            <input 
            type="file" id="file" 
            accept=".jpg"
            multiple
            onChange={handleFileChange}
            />

            <button 
            className="btn btn-primary mt-3" 
            onClick={handleSubmit}
            >Upload</button>
        </form>
    )
}

export default AddMissingCarForm;