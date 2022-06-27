import styles from './FoundCarInfo.module.css';

const FoundCarInfo = (props) => {
    const data = props.data;
    return (
        <div className={styles['info']}>
            <div className={styles['info__car']}>
                <h3 className={styles['title']}>License Plate Number:</h3>
                <p className={styles['text']}>{data.licensePlateNumber}</p>
                <h3 className={styles['title']}>Time: </h3>
                <p className={styles['text']}>{data.timestamp}</p>
            </div>
            <div className={styles['info__location']}>
                <h3 className={styles['title']}>Possible Location</h3>
                <p className={styles['text']}>{data.address}</p>
            </div>
        </div> 
    )
};

export default FoundCarInfo;