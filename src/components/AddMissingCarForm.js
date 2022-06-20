import Input from "./Input";
import styles from "./AddMissingCarForm.module.css";
import Button from "./Button";

const AddMissingCarForm = (props) => {
    return  (
        <form onSubmit={props.submitHandler} className={styles['form']}>
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
        </form>
    )
}

export default AddMissingCarForm;