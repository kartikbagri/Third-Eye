import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
			<div id='about-us' className={styles['section-container']}>
				<div className={styles['background-container']}>
					<img className={styles['background']} src='/images/background2.png' alt='background'></img>
				</div>
				<div className={styles['container']}>
					<h1 className={styles['title']}>What is</h1>
					<h1 className={`${styles['title']} ${styles['dark']}`}>Third Eye</h1>
					<p className={styles['text']}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
					aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
					</p>
				</div>
			</div>
    );
};

export default AboutUs;