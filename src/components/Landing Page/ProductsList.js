import styles from './Products.module.css';
import { Link } from 'react-router-dom';

const ProductsList = () => {
    return (
        <div className={`${styles['products-container']}`}>
            <div className={`${styles['product']} ${styles['first-product']}`}>
                <img className={styles['product-image']} src='images/v-trace.png' alt='v-trace'/>
                <Link to='/vehicle-tracker' className={`${styles['product-title']} ${styles['available']}`}>V-TRACE</Link>
                <p className={styles['product-description']}>Automated License Plate Recognition System for 
                    real time vehicle tracking using AI and Machine Learning</p>
            </div>
            <div className={styles['product']}>
                <img className={styles['product-image']} src='images/p-trace.png' alt='p-trace'/>
                {/* <h2 className={styles['product-title']}>P-TRACE</h2> */}
                <Link to='/person-tracker' className={`${styles['product-title']} ${styles['available']}`}>P-TRACE</Link>
                {/* <p className={styles['text']}>Coming Soon</p> */}
                <p className={styles['product-description']}>Automated License Plate Recognition System for 
                    real time vehicle tracking using AI and Machine Learning</p>
            </div>
        </div>
    );
};

export default ProductsList;