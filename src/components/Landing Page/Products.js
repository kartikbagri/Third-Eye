import styles from './Products.module.css';
import ProductsList from './ProductsList';

const Products = () => {
    return (
			<div id='products'  className={styles['container']}>
				<h1 className={styles['title']}>
					We provide <span className={styles['dark']}>State of the Art</span> Solutions.
				</h1>
				<ProductsList />
			</div>
    );
};

export default Products;