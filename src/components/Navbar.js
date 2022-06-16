// import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  return (
		<nav className={styles['navbar']}>
			<div className={styles['logo-container']}>

			</div>
			<ul className={styles['links']}>
				<li className={styles['link-item']}>
					<NavLink className={styles['link-item__link']} to='#' smooth>
						Home
					</NavLink>
				</li>
				<li className={styles['link-item']}>
					<NavLink className={styles['link-item__link']} to='#about-us' smooth
					activeClassName={styles['active']}>
						About Us
					</NavLink>
				</li>
				<li className={styles['link-item']}>
					<NavLink 
						className={styles['link-item__link']} to='#products' smooth
						activeClassName={styles['active']}>
						Our Products
					</NavLink>
				</li>
				<li className={styles['link-item']}>
					<NavLink className={styles['link-item__link']} to='#demo' smooth
					activeClassName={styles['active']}>
						LIVE Demo
					</NavLink>
				</li>
				<li className={styles['link-item']}>
					<NavLink className={styles['link-item__link']} to='#contact-us' smooth
					activeClassName={styles['active']}>
						Contact Us
					</NavLink>
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;