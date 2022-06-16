import styles from './Products.module.css';

const Products = () => {
    return (
			<div id='products'  className={styles['container']}>
				<h1 className={styles['title']}>
					We provide <span className={styles['dark']}>State of the Art</span> Solutions.
				</h1>
				<div className={styles['products-container']}>
					<div className={styles['product']}>
						<h2 className={styles['product-title']}>V-TRACE</h2>
						<p className={styles['product-description']}>Automated License Plate Recognition System for 
							real time vehicle tracking using AI and Machine Learning</p>
					</div>
					<div className={styles['product']}>
						<h2 className={styles['product-title']}>P-TRACE</h2>
						<p className={styles['text']}>Coming Soon</p>
						<p className={styles['product-description']}>Automated License Plate Recognition System for 
							real time vehicle tracking using AI and Machine Learning</p>
					</div>
				</div>
			</div>
    );
};

export default Products;