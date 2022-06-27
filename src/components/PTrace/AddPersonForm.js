import { Fragment, useRef, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styles from "./AddPersonForm.module.css";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const AddPersonForm = (props) => {

    const nameRef = useRef();
    const imageRef = useRef();
    const testingImgRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isReportLoading, setIsReportLoading] = useState(false);
    const [foundDetails, setFoundDetails] = useState(null);

    const reportSubmitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const file = imageRef.current.files[0];
        const data = new FormData();
        data.append('photograph', file);
        data.append('name', name);
        setIsReportLoading(true);
        axios.post("https://third-eye-hackmanthan.herokuapp.com/api/reports", data)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setIsReportLoading(false);
        })
    };

    const imageSubmitHandler = (event) => {
        event.preventDefault();
        const file = testingImgRef.current.files[0];
        const data = new FormData();
        data.append('photograph', file);
        data.append('latitude', 11);
        data.append('longitude', 81);
        setIsLoading(true);
        axios.post("https://third-eye-hackmanthan.herokuapp.com/api/persons", data)
        .then((res) => res.data.data)
        .then((data) => {
            setFoundDetails(data[0]);
            console.log(data[0]);
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <Fragment>
            <form className={styles['form']} onSubmit={reportSubmitHandler}>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>Person's Name</label>
                    <Input
                        className={styles['form-input']}
                        type="text"
                        placeholder="Person's Name"
                        ref={nameRef}
                    />
                </div>
                <div className={styles['form-input']}>
                    <label className={styles['form-label']}>Upload Images</label>
                    <input 
                        className={styles['form-input']}
                        type="file" id="file" 
                        ref={imageRef}
                    />
                </div>
                {!isReportLoading && <Button
                    className={styles['btn']}
                    type="submit"

                >
                    Add Report to Sherlock
                </Button>}
                {isReportLoading && <div className="loading"><Grid color='white'/></div>}
            </form>
            <form className={styles['form']} onSubmit={imageSubmitHandler}>
                <div className={styles['testing']}>
                    <label className={styles['form-label']}>Upload An Image (For testing purposes only)</label>
                    <input 
                        className={styles['form-input']}
                        type="file" id="file"
                        ref={testingImgRef}
                    />
                </div>
                {!isLoading && <Button 
                    className={styles['btn']}
                    type="submit"
                >
                    Upload
                </Button>}
                {isLoading && <div className="loading"><Grid color='white'/></div>}
            </form>
            {!isLoading && foundDetails && foundDetails.length>0 && <h3>Reports found</h3>}
            {!isLoading && foundDetails && foundDetails.length>0 && foundDetails.map((detail) => <div>
                <p className={styles['report-names']}>Name: {detail.name}</p>
            </div>)}
            {!isLoading && foundDetails && foundDetails.length===0 && <h3>No reports found</h3>}
        </Fragment>
    )
};

export default AddPersonForm;