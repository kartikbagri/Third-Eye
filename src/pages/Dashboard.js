import ProductsList from "../components/Landing Page/ProductsList";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
		<div className={styles['products-container']}>
			<ProductsList />
		</div>
	);
};

export default Dashboard;